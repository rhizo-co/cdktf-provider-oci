# `dataOciIdentityDomainsSocialIdentityProvider` Submodule <a name="`dataOciIdentityDomainsSocialIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSocialIdentityProvider <a name="DataOciIdentityDomainsSocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider oci_identity_domains_social_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProvider(Construct Scope, string Id, DataOciIdentityDomainsSocialIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig">DataOciIdentityDomainsSocialIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig">DataOciIdentityDomainsSocialIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.resetResourceTypeSchemaVersion"></a>

```csharp
private void ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSocialIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSocialIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSocialIdentityProvider.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityDomainsSocialIdentityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityDomainsSocialIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsSocialIdentityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsSocialIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSocialIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled">AccountLinkingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.adminScope">AdminScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authzUrl">AuthzUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled">AutoRedirectEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload">ClientCredentialInPayload</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds">ClockSkewInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.compartmentOcid">CompartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerKey">ConsumerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerSecret">ConsumerSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.deleteInProgress">DeleteInProgress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.domainOcid">DomainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idAttribute">IdAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups">JitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled">JitProvGroupStaticListEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList">DataOciIdentityDomainsSocialIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.profileUrl">ProfileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.refreshTokenUrl">RefreshTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.registrationEnabled">RegistrationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings">RelayIdpParamMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.schemas">Schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.serviceProviderName">ServiceProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.showOnLogin">ShowOnLogin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled">SocialJitProvisioningEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList">DataOciIdentityDomainsSocialIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tenancyOcid">TenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderIdInput">SocialIdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderId">SocialIdentityProviderId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `AccountLinkingEnabled`<sup>Required</sup> <a name="AccountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.accountLinkingEnabled"></a>

```csharp
public IResolvable AccountLinkingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AdminScope`<sup>Required</sup> <a name="AdminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.adminScope"></a>

```csharp
public string[] AdminScope { get; }
```

- *Type:* string[]

---

##### `AuthzUrl`<sup>Required</sup> <a name="AuthzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authzUrl"></a>

```csharp
public string AuthzUrl { get; }
```

- *Type:* string

---

##### `AutoRedirectEnabled`<sup>Required</sup> <a name="AutoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.autoRedirectEnabled"></a>

```csharp
public IResolvable AutoRedirectEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClientCredentialInPayload`<sup>Required</sup> <a name="ClientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clientCredentialInPayload"></a>

```csharp
public IResolvable ClientCredentialInPayload { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClockSkewInSeconds`<sup>Required</sup> <a name="ClockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.clockSkewInSeconds"></a>

```csharp
public double ClockSkewInSeconds { get; }
```

- *Type:* double

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.compartmentOcid"></a>

```csharp
public string CompartmentOcid { get; }
```

- *Type:* string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerKey"></a>

```csharp
public string ConsumerKey { get; }
```

- *Type:* string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.consumerSecret"></a>

```csharp
public string ConsumerSecret { get; }
```

- *Type:* string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.deleteInProgress"></a>

```csharp
public IResolvable DeleteInProgress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.domainOcid"></a>

```csharp
public string DomainOcid { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdAttribute`<sup>Required</sup> <a name="IdAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idAttribute"></a>

```csharp
public string IdAttribute { get; }
```

- *Type:* string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsCreatedBy"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList IdcsCreatedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastModifiedBy"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList IdcsLastModifiedBy { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```csharp
public string IdcsLastUpgradedInRelease { get; }
```

- *Type:* string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsPreventedOperations"></a>

```csharp
public string[] IdcsPreventedOperations { get; }
```

- *Type:* string[]

---

##### `JitProvAssignedGroups`<sup>Required</sup> <a name="JitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvAssignedGroups"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList JitProvAssignedGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `JitProvGroupStaticListEnabled`<sup>Required</sup> <a name="JitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.jitProvGroupStaticListEnabled"></a>

```csharp
public IResolvable JitProvGroupStaticListEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.meta"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderMetaList Meta { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList">DataOciIdentityDomainsSocialIdentityProviderMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.profileUrl"></a>

```csharp
public string ProfileUrl { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `RefreshTokenUrl`<sup>Required</sup> <a name="RefreshTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.refreshTokenUrl"></a>

```csharp
public string RefreshTokenUrl { get; }
```

- *Type:* string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.registrationEnabled"></a>

```csharp
public IResolvable RegistrationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RelayIdpParamMappings`<sup>Required</sup> <a name="RelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.relayIdpParamMappings"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList RelayIdpParamMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.schemas"></a>

```csharp
public string[] Schemas { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.serviceProviderName"></a>

```csharp
public string ServiceProviderName { get; }
```

- *Type:* string

---

##### `ShowOnLogin`<sup>Required</sup> <a name="ShowOnLogin" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.showOnLogin"></a>

```csharp
public IResolvable ShowOnLogin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SocialJitProvisioningEnabled`<sup>Required</sup> <a name="SocialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialJitProvisioningEnabled"></a>

```csharp
public IResolvable SocialJitProvisioningEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tags"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderTagsList Tags { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList">DataOciIdentityDomainsSocialIdentityProviderTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tenancyOcid"></a>

```csharp
public string TenancyOcid { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpointInput"></a>

```csharp
public string IdcsEndpointInput { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```csharp
public string ResourceTypeSchemaVersionInput { get; }
```

- *Type:* string

---

##### `SocialIdentityProviderIdInput`<sup>Optional</sup> <a name="SocialIdentityProviderIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderIdInput"></a>

```csharp
public string SocialIdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; }
```

- *Type:* string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; }
```

- *Type:* string

---

##### `SocialIdentityProviderId`<sup>Required</sup> <a name="SocialIdentityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.socialIdentityProviderId"></a>

```csharp
public string SocialIdentityProviderId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSocialIdentityProviderConfig <a name="DataOciIdentityDomainsSocialIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdcsEndpoint,
    string SocialIdentityProviderId,
    string Authorization = null,
    string ResourceTypeSchemaVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#idcs_endpoint DataOciIdentityDomainsSocialIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.socialIdentityProviderId">SocialIdentityProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#social_identity_provider_id DataOciIdentityDomainsSocialIdentityProvider#social_identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#authorization DataOciIdentityDomainsSocialIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProvider#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.idcsEndpoint"></a>

```csharp
public string IdcsEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#idcs_endpoint DataOciIdentityDomainsSocialIdentityProvider#idcs_endpoint}.

---

##### `SocialIdentityProviderId`<sup>Required</sup> <a name="SocialIdentityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.socialIdentityProviderId"></a>

```csharp
public string SocialIdentityProviderId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#social_identity_provider_id DataOciIdentityDomainsSocialIdentityProvider#social_identity_provider_id}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#authorization DataOciIdentityDomainsSocialIdentityProvider#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```csharp
public string ResourceTypeSchemaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_social_identity_provider#resource_type_schema_version DataOciIdentityDomainsSocialIdentityProvider#resource_type_schema_version}.

---

### DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy {

};
```


### DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy {

};
```


### DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups <a name="DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups {

};
```


### DataOciIdentityDomainsSocialIdentityProviderMeta <a name="DataOciIdentityDomainsSocialIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderMeta {

};
```


### DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings <a name="DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings {

};
```


### DataOciIdentityDomainsSocialIdentityProviderTags <a name="DataOciIdentityDomainsSocialIdentityProviderTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.get"></a>

```csharp
private DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get"></a>

```csharp
private DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsSocialIdentityProviderIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList <a name="DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```csharp
private DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsSocialIdentityProviderJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsSocialIdentityProviderMetaList <a name="DataOciIdentityDomainsSocialIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderMetaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.get"></a>

```csharp
private DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta">DataOciIdentityDomainsSocialIdentityProviderMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMetaOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderMeta InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderMeta">DataOciIdentityDomainsSocialIdentityProviderMeta</a>

---


### DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList <a name="DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get"></a>

```csharp
private DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey">RelayParamKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue">RelayParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelayParamKey`<sup>Required</sup> <a name="RelayParamKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamKey"></a>

```csharp
public string RelayParamKey { get; }
```

- *Type:* string

---

##### `RelayParamValue`<sup>Required</sup> <a name="RelayParamValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.relayParamValue"></a>

```csharp
public string RelayParamValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings">DataOciIdentityDomainsSocialIdentityProviderRelayIdpParamMappings</a>

---


### DataOciIdentityDomainsSocialIdentityProviderTagsList <a name="DataOciIdentityDomainsSocialIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.get"></a>

```csharp
private DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference <a name="DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags">DataOciIdentityDomainsSocialIdentityProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTagsOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityDomainsSocialIdentityProviderTags InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSocialIdentityProvider.DataOciIdentityDomainsSocialIdentityProviderTags">DataOciIdentityDomainsSocialIdentityProviderTags</a>

---



