# `dataOciIdentityDomainsUserAttributesSettings` Submodule <a name="`dataOciIdentityDomainsUserAttributesSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsUserAttributesSettings <a name="DataOciIdentityDomainsUserAttributesSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings oci_identity_domains_user_attributes_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettings(scope Construct, id *string, config DataOciIdentityDomainsUserAttributesSettingsConfig) DataOciIdentityDomainsUserAttributesSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig">DataOciIdentityDomainsUserAttributesSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig">DataOciIdentityDomainsUserAttributesSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsUserAttributesSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsUserAttributesSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsUserAttributesSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsUserAttributesSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsUserAttributesSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.userAttributesSettings">UserAttributesSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `UserAttributesSettings`<sup>Required</sup> <a name="UserAttributesSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.userAttributesSettings"></a>

```go
func UserAttributesSettings() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsUserAttributesSettingsConfig <a name="DataOciIdentityDomainsUserAttributesSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	CompartmentId: *string,
	Id: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#idcs_endpoint DataOciIdentityDomainsUserAttributesSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attributes DataOciIdentityDomainsUserAttributesSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attribute_sets DataOciIdentityDomainsUserAttributesSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#authorization DataOciIdentityDomainsUserAttributesSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#compartment_id DataOciIdentityDomainsUserAttributesSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#id DataOciIdentityDomainsUserAttributesSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#resource_type_schema_version DataOciIdentityDomainsUserAttributesSettings#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#idcs_endpoint DataOciIdentityDomainsUserAttributesSettings#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attributes DataOciIdentityDomainsUserAttributesSettings#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#attribute_sets DataOciIdentityDomainsUserAttributesSettings#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#authorization DataOciIdentityDomainsUserAttributesSettings#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#compartment_id DataOciIdentityDomainsUserAttributesSettings#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#id DataOciIdentityDomainsUserAttributesSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_user_attributes_settings#resource_type_schema_version DataOciIdentityDomainsUserAttributesSettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings {

}
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings {

}
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta {

}
```


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

&dataociidentitydomainsuserattributessettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutability">EndUserMutability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutabilityCanonicalValues">EndUserMutabilityCanonicalValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndUserMutability`<sup>Required</sup> <a name="EndUserMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutability"></a>

```go
func EndUserMutability() *string
```

- *Type:* *string

---

##### `EndUserMutabilityCanonicalValues`<sup>Required</sup> <a name="EndUserMutabilityCanonicalValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.endUserMutabilityCanonicalValues"></a>

```go
func EndUserMutabilityCanonicalValues() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettings</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMeta</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSettings">AttributeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.userAttributesSettingId">UserAttributesSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `AttributeSettings`<sup>Required</sup> <a name="AttributeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.attributeSettings"></a>

```go
func AttributeSettings() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsAttributeSettingsList</a>

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UserAttributesSettingId`<sup>Required</sup> <a name="UserAttributesSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.userAttributesSettingId"></a>

```go
func UserAttributesSettingId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettings</a>

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference <a name="DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsuserattributessettings"

dataociidentitydomainsuserattributessettings.NewDataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsUserAttributesSettings.DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags">DataOciIdentityDomainsUserAttributesSettingsUserAttributesSettingsTags</a>

---



