# `dataOciIdentityDomainsOciConsoleSignOnPolicyConsent` Submodule <a name="`dataOciIdentityDomainsOciConsoleSignOnPolicyConsent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsent <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent oci_identity_domains_oci_console_sign_on_policy_consent}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsent(Construct Scope, string Id, DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsOciConsoleSignOnPolicyConsent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsOciConsoleSignOnPolicyConsent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOciConsoleSignOnPolicyConsent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.changeType">ChangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.clientIp">ClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.consentSignedBy">ConsentSignedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.modifiedResource">ModifiedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.notificationRecipients">NotificationRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.policyResource">PolicyResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.timeConsentSigned">TimeConsentSigned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentIdInput">OciConsoleSignOnPolicyConsentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentId">OciConsoleSignOnPolicyConsentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ChangeType`<sup>Required</sup> <a name="ChangeType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.changeType"></a>

```csharp
public string ChangeType { get; }
```

- *Type:* string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.clientIp"></a>

```csharp
public string ClientIp { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConsentSignedBy`<sup>Required</sup> <a name="ConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.consentSignedBy"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList ConsentSignedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.meta"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList</a>

---

##### `ModifiedResource`<sup>Required</sup> <a name="ModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.modifiedResource"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList ModifiedResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList</a>

---

##### `NotificationRecipients`<sup>Required</sup> <a name="NotificationRecipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.notificationRecipients"></a>

```csharp
public string[] NotificationRecipients { get; }
```

- *Type:* string[]

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PolicyResource`<sup>Required</sup> <a name="PolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.policyResource"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList PolicyResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList</a>

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tags"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `TimeConsentSigned`<sup>Required</sup> <a name="TimeConsentSigned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.timeConsentSigned"></a>

```csharp
public string TimeConsentSigned { get; }
```

- *Type:* string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OciConsoleSignOnPolicyConsentIdInput`<sup>Optional</sup> <a name="OciConsoleSignOnPolicyConsentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentIdInput"></a>

```csharp
public string OciConsoleSignOnPolicyConsentIdInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `OciConsoleSignOnPolicyConsentId`<sup>Required</sup> <a name="OciConsoleSignOnPolicyConsentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentId"></a>

```csharp
public string OciConsoleSignOnPolicyConsentId { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string OciConsoleSignOnPolicyConsentId,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    string Id = null,
    string ResourceTypeSchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.ociConsoleSignOnPolicyConsentId">OciConsoleSignOnPolicyConsentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}.

---

##### `OciConsoleSignOnPolicyConsentId`<sup>Required</sup> <a name="OciConsoleSignOnPolicyConsentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.ociConsoleSignOnPolicyConsentId"></a>

```csharp
public string OciConsoleSignOnPolicyConsentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags</a>

---



