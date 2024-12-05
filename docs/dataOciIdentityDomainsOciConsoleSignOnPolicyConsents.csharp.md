# `dataOciIdentityDomainsOciConsoleSignOnPolicyConsents` Submodule <a name="`dataOciIdentityDomainsOciConsoleSignOnPolicyConsents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsents <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsents" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents oci_identity_domains_oci_console_sign_on_policy_consents}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsents(Construct Scope, string Id, DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentCount">ResetOciConsoleSignOnPolicyConsentCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentFilter">ResetOciConsoleSignOnPolicyConsentFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAttributeSets"></a>

```csharp
private void ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOciConsoleSignOnPolicyConsentCount` <a name="ResetOciConsoleSignOnPolicyConsentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentCount"></a>

```csharp
private void ResetOciConsoleSignOnPolicyConsentCount()
```

##### `ResetOciConsoleSignOnPolicyConsentFilter` <a name="ResetOciConsoleSignOnPolicyConsentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetOciConsoleSignOnPolicyConsentFilter"></a>

```csharp
private void ResetOciConsoleSignOnPolicyConsentFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.resetStartIndex"></a>

```csharp
private void ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsents resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsents resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsOciConsoleSignOnPolicyConsents to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsOciConsoleSignOnPolicyConsents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOciConsoleSignOnPolicyConsents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.itemsPerPage">ItemsPerPage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resources">Resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.totalResults">TotalResults</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributesInput">AttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCountInput">OciConsoleSignOnPolicyConsentCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilterInput">OciConsoleSignOnPolicyConsentFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndexInput">StartIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCount">OciConsoleSignOnPolicyConsentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilter">OciConsoleSignOnPolicyConsentFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndex">StartIndex</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filter"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.itemsPerPage"></a>

```csharp
public double ItemsPerPage { get; }
```

- *Type:* double

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resources"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList Resources { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tags"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList</a>

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.totalResults"></a>

```csharp
public double TotalResults { get; }
```

- *Type:* double

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSetsInput"></a>

```csharp
public string[] AttributeSetsInput { get; }
```

- *Type:* string[]

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributesInput"></a>

```csharp
public string AttributesInput { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OciConsoleSignOnPolicyConsentCountInput`<sup>Optional</sup> <a name="OciConsoleSignOnPolicyConsentCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCountInput"></a>

```csharp
public double OciConsoleSignOnPolicyConsentCountInput { get; }
```

- *Type:* double

---

##### `OciConsoleSignOnPolicyConsentFilterInput`<sup>Optional</sup> <a name="OciConsoleSignOnPolicyConsentFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilterInput"></a>

```csharp
public string OciConsoleSignOnPolicyConsentFilterInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndexInput"></a>

```csharp
public double StartIndexInput { get; }
```

- *Type:* double

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; }
```

- *Type:* string[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `OciConsoleSignOnPolicyConsentCount`<sup>Required</sup> <a name="OciConsoleSignOnPolicyConsentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentCount"></a>

```csharp
public double OciConsoleSignOnPolicyConsentCount { get; }
```

- *Type:* double

---

##### `OciConsoleSignOnPolicyConsentFilter`<sup>Required</sup> <a name="OciConsoleSignOnPolicyConsentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.ociConsoleSignOnPolicyConsentFilter"></a>

```csharp
public string OciConsoleSignOnPolicyConsentFilter { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.startIndex"></a>

```csharp
public double StartIndex { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsents.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string Attributes = null,
    string[] AttributeSets = null,
    string Authorization = null,
    object Filter = null,
    string Id = null,
    double OciConsoleSignOnPolicyConsentCount = null,
    string OciConsoleSignOnPolicyConsentFilter = null,
    string ResourceTypeSchemaVersion = null,
    double StartIndex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributes">Attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributeSets">AttributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentCount">OciConsoleSignOnPolicyConsentCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_count DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentFilter">OciConsoleSignOnPolicyConsentFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.startIndex">StartIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#start_index DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributes"></a>

```csharp
public string Attributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.attributeSets"></a>

```csharp
public string[] AttributeSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#authorization}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OciConsoleSignOnPolicyConsentCount`<sup>Optional</sup> <a name="OciConsoleSignOnPolicyConsentCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentCount"></a>

```csharp
public double OciConsoleSignOnPolicyConsentCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_count DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_count}.

---

##### `OciConsoleSignOnPolicyConsentFilter`<sup>Optional</sup> <a name="OciConsoleSignOnPolicyConsentFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.ociConsoleSignOnPolicyConsentFilter"></a>

```csharp
public string OciConsoleSignOnPolicyConsentFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#oci_console_sign_on_policy_consent_filter DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#oci_console_sign_on_policy_consent_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#resource_type_schema_version}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsConfig.property.startIndex"></a>

```csharp
public double StartIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#start_index DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#start_index}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#name DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#values DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#regex DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#name DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#values DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consents#regex DataOciIdentityDomainsOciConsoleSignOnPolicyConsents#regex}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource {

};
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMeta</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.changeType">ChangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.clientIp">ClientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.consentSignedBy">ConsentSignedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.modifiedResource">ModifiedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.notificationRecipients">NotificationRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.policyResource">PolicyResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.timeConsentSigned">TimeConsentSigned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeType`<sup>Required</sup> <a name="ChangeType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.changeType"></a>

```csharp
public string ChangeType { get; }
```

- *Type:* string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.clientIp"></a>

```csharp
public string ClientIp { get; }
```

- *Type:* string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConsentSignedBy`<sup>Required</sup> <a name="ConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.consentSignedBy"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList ConsentSignedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesConsentSignedByList</a>

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.meta"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesMetaList</a>

---

##### `ModifiedResource`<sup>Required</sup> <a name="ModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.modifiedResource"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList ModifiedResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesModifiedResourceList</a>

---

##### `NotificationRecipients`<sup>Required</sup> <a name="NotificationRecipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.notificationRecipients"></a>

```csharp
public string[] NotificationRecipients { get; }
```

- *Type:* string[]

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `PolicyResource`<sup>Required</sup> <a name="PolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.policyResource"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList PolicyResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList</a>

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `TimeConsentSigned`<sup>Required</sup> <a name="TimeConsentSigned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.timeConsentSigned"></a>

```csharp
public string TimeConsentSigned { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResources</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResourceOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsResourcesPolicyResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.get"></a>

```csharp
private DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsents.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentsTags</a>

---



