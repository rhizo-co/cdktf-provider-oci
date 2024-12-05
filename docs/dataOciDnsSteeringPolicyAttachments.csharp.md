# `dataOciDnsSteeringPolicyAttachments` Submodule <a name="`dataOciDnsSteeringPolicyAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDnsSteeringPolicyAttachments <a name="DataOciDnsSteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments oci_dns_steering_policy_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachments(Construct Scope, string Id, DataOciDnsSteeringPolicyAttachmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig">DataOciDnsSteeringPolicyAttachmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig">DataOciDnsSteeringPolicyAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomainContains">ResetDomainContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetSteeringPolicyId">ResetSteeringPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetDomainContains` <a name="ResetDomainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetDomainContains"></a>

```csharp
private void ResetDomainContains()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSteeringPolicyId` <a name="ResetSteeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetSteeringPolicyId"></a>

```csharp
private void ResetSteeringPolicyId()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedGreaterThanOrEqualTo"></a>

```csharp
private void ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetTimeCreatedLessThan"></a>

```csharp
private void ResetTimeCreatedLessThan()
```

##### `ResetZoneId` <a name="ResetZoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicyAttachments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicyAttachments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicyAttachments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDnsSteeringPolicyAttachments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDnsSteeringPolicyAttachments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDnsSteeringPolicyAttachments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDnsSteeringPolicyAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDnsSteeringPolicyAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList">DataOciDnsSteeringPolicyAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyAttachments">SteeringPolicyAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContainsInput">DomainContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyIdInput">SteeringPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContains">DomainContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyId">SteeringPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filter"></a>

```csharp
public DataOciDnsSteeringPolicyAttachmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList">DataOciDnsSteeringPolicyAttachmentsFilterList</a>

---

##### `SteeringPolicyAttachments`<sup>Required</sup> <a name="SteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyAttachments"></a>

```csharp
public DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList SteeringPolicyAttachments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainContainsInput`<sup>Optional</sup> <a name="DomainContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContainsInput"></a>

```csharp
public string DomainContainsInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SteeringPolicyIdInput`<sup>Optional</sup> <a name="SteeringPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyIdInput"></a>

```csharp
public string SteeringPolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualToInput"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualToInput { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThanInput"></a>

```csharp
public string TimeCreatedLessThanInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainContains`<sup>Required</sup> <a name="DomainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.domainContains"></a>

```csharp
public string DomainContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SteeringPolicyId`<sup>Required</sup> <a name="SteeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.steeringPolicyId"></a>

```csharp
public string SteeringPolicyId { get; }
```

- *Type:* string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; }
```

- *Type:* string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDnsSteeringPolicyAttachmentsConfig <a name="DataOciDnsSteeringPolicyAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName = null,
    string Domain = null,
    string DomainContains = null,
    object Filter = null,
    string Id = null,
    string State = null,
    string SteeringPolicyId = null,
    string TimeCreatedGreaterThanOrEqualTo = null,
    string TimeCreatedLessThan = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domainContains">DomainContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.steeringPolicyId">SteeringPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#compartment_id DataOciDnsSteeringPolicyAttachments#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#display_name DataOciDnsSteeringPolicyAttachments#display_name}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain DataOciDnsSteeringPolicyAttachments#domain}.

---

##### `DomainContains`<sup>Optional</sup> <a name="DomainContains" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.domainContains"></a>

```csharp
public string DomainContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#domain_contains DataOciDnsSteeringPolicyAttachments#domain_contains}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#filter DataOciDnsSteeringPolicyAttachments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#id DataOciDnsSteeringPolicyAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#state DataOciDnsSteeringPolicyAttachments#state}.

---

##### `SteeringPolicyId`<sup>Optional</sup> <a name="SteeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.steeringPolicyId"></a>

```csharp
public string SteeringPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#steering_policy_id DataOciDnsSteeringPolicyAttachments#steering_policy_id}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```csharp
public string TimeCreatedGreaterThanOrEqualTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_greater_than_or_equal_to DataOciDnsSteeringPolicyAttachments#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.timeCreatedLessThan"></a>

```csharp
public string TimeCreatedLessThan { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#time_created_less_than DataOciDnsSteeringPolicyAttachments#time_created_less_than}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#zone_id DataOciDnsSteeringPolicyAttachments#zone_id}.

---

### DataOciDnsSteeringPolicyAttachmentsFilter <a name="DataOciDnsSteeringPolicyAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#name DataOciDnsSteeringPolicyAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#values DataOciDnsSteeringPolicyAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#regex DataOciDnsSteeringPolicyAttachments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#name DataOciDnsSteeringPolicyAttachments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#values DataOciDnsSteeringPolicyAttachments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dns_steering_policy_attachments#regex DataOciDnsSteeringPolicyAttachments#regex}.

---

### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDnsSteeringPolicyAttachmentsFilterList <a name="DataOciDnsSteeringPolicyAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get"></a>

```csharp
private DataOciDnsSteeringPolicyAttachmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDnsSteeringPolicyAttachmentsFilterOutputReference <a name="DataOciDnsSteeringPolicyAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get"></a>

```csharp
private DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference <a name="DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.rtypes">Rtypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.steeringPolicyId">SteeringPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rtypes`<sup>Required</sup> <a name="Rtypes" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.rtypes"></a>

```csharp
public string[] Rtypes { get; }
```

- *Type:* string[]

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.selfAttribute"></a>

```csharp
public string SelfAttribute { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SteeringPolicyId`<sup>Required</sup> <a name="SteeringPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.steeringPolicyId"></a>

```csharp
public string SteeringPolicyId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDnsSteeringPolicyAttachments.DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments">DataOciDnsSteeringPolicyAttachmentsSteeringPolicyAttachments</a>

---



