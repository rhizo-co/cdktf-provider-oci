# `dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule <a name="`dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPaths <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPaths" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths oci_data_safe_security_policy_report_role_grant_paths}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPaths(Construct Scope, string Id, DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig">DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig">DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportRoleGrantPaths.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportRoleGrantPaths.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportRoleGrantPaths.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSecurityPolicyReportRoleGrantPaths.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityPolicyReportRoleGrantPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection">RoleGrantPathCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput">GrantedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput">GranteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput">SecurityPolicyReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole">GrantedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter"></a>

```csharp
public DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a>

---

##### `RoleGrantPathCollection`<sup>Required</sup> <a name="RoleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection"></a>

```csharp
public DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList RoleGrantPathCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GrantedRoleInput`<sup>Optional</sup> <a name="GrantedRoleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput"></a>

```csharp
public string GrantedRoleInput { get; }
```

- *Type:* string

---

##### `GranteeInput`<sup>Optional</sup> <a name="GranteeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput"></a>

```csharp
public string GranteeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyReportIdInput`<sup>Optional</sup> <a name="SecurityPolicyReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput"></a>

```csharp
public string SecurityPolicyReportIdInput { get; }
```

- *Type:* string

---

##### `GrantedRole`<sup>Required</sup> <a name="GrantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole"></a>

```csharp
public string GrantedRole { get; }
```

- *Type:* string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId"></a>

```csharp
public string SecurityPolicyReportId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GrantedRole,
    string Grantee,
    string SecurityPolicyReportId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole">GrantedRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee">Grantee</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId">SecurityPolicyReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GrantedRole`<sup>Required</sup> <a name="GrantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole"></a>

```csharp
public string GrantedRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}.

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee"></a>

```csharp
public string Grantee { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}.

---

##### `SecurityPolicyReportId`<sup>Required</sup> <a name="SecurityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId"></a>

```csharp
public string SecurityPolicyReportId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#filter DataOciDataSafeSecurityPolicyReportRoleGrantPaths#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection {

};
```


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel">DepthLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole">GrantedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee">Grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DepthLevel`<sup>Required</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel"></a>

```csharp
public double DepthLevel { get; }
```

- *Type:* double

---

##### `GrantedRole`<sup>Required</sup> <a name="GrantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole"></a>

```csharp
public string GrantedRole { get; }
```

- *Type:* string

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee"></a>

```csharp
public string Grantee { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get"></a>

```csharp
private DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a>

---



