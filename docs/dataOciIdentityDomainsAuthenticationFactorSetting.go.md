# `dataOciIdentityDomainsAuthenticationFactorSetting` Submodule <a name="`dataOciIdentityDomainsAuthenticationFactorSetting` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAuthenticationFactorSetting <a name="DataOciIdentityDomainsAuthenticationFactorSetting" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting oci_identity_domains_authentication_factor_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSetting(scope Construct, id *string, config DataOciIdentityDomainsAuthenticationFactorSettingConfig) DataOciIdentityDomainsAuthenticationFactorSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig">DataOciIdentityDomainsAuthenticationFactorSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig">DataOciIdentityDomainsAuthenticationFactorSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthenticationFactorSettingId">ResetAuthenticationFactorSettingId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthenticationFactorSettingId` <a name="ResetAuthenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthenticationFactorSettingId"></a>

```go
func ResetAuthenticationFactorSettingId()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSetting_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsAuthenticationFactorSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsAuthenticationFactorSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsAuthenticationFactorSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAuthenticationFactorSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled">AutoEnrollEmailFactorDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled">BypassCodeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings">BypassCodeSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.clientAppSettings">ClientAppSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compliancePolicy">CompliancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailEnabled">EmailEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailSettings">EmailSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions">EndpointRestrictions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled">FidoAuthenticatorEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled">HideBackupFactorEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings">IdentityStoreSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList">DataOciIdentityDomainsAuthenticationFactorSettingMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory">MfaEnabledCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType">MfaEnrollmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled">PhoneCallEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.pushEnabled">PushEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled">SecurityQuestionsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.smsEnabled">SmsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList">DataOciIdentityDomainsAuthenticationFactorSettingTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor">ThirdPartyFactor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpEnabled">TotpEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpSettings">TotpSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors">UserEnrollmentDisabledFactors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled">YubicoOtpEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput">AuthenticationFactorSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId">AuthenticationFactorSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoEnrollEmailFactorDisabled`<sup>Required</sup> <a name="AutoEnrollEmailFactorDisabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.autoEnrollEmailFactorDisabled"></a>

```go
func AutoEnrollEmailFactorDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BypassCodeEnabled`<sup>Required</sup> <a name="BypassCodeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeEnabled"></a>

```go
func BypassCodeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BypassCodeSettings`<sup>Required</sup> <a name="BypassCodeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.bypassCodeSettings"></a>

```go
func BypassCodeSettings() DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList</a>

---

##### `ClientAppSettings`<sup>Required</sup> <a name="ClientAppSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.clientAppSettings"></a>

```go
func ClientAppSettings() DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `CompliancePolicy`<sup>Required</sup> <a name="CompliancePolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.compliancePolicy"></a>

```go
func CompliancePolicy() DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `EmailEnabled`<sup>Required</sup> <a name="EmailEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailEnabled"></a>

```go
func EmailEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EmailSettings`<sup>Required</sup> <a name="EmailSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.emailSettings"></a>

```go
func EmailSettings() DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList</a>

---

##### `EndpointRestrictions`<sup>Required</sup> <a name="EndpointRestrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.endpointRestrictions"></a>

```go
func EndpointRestrictions() DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList</a>

---

##### `FidoAuthenticatorEnabled`<sup>Required</sup> <a name="FidoAuthenticatorEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.fidoAuthenticatorEnabled"></a>

```go
func FidoAuthenticatorEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HideBackupFactorEnabled`<sup>Required</sup> <a name="HideBackupFactorEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.hideBackupFactorEnabled"></a>

```go
func HideBackupFactorEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityStoreSettings`<sup>Required</sup> <a name="IdentityStoreSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.identityStoreSettings"></a>

```go
func IdentityStoreSettings() DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList</a>

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsAuthenticationFactorSettingMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList">DataOciIdentityDomainsAuthenticationFactorSettingMetaList</a>

---

##### `MfaEnabledCategory`<sup>Required</sup> <a name="MfaEnabledCategory" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnabledCategory"></a>

```go
func MfaEnabledCategory() *string
```

- *Type:* *string

---

##### `MfaEnrollmentType`<sup>Required</sup> <a name="MfaEnrollmentType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.mfaEnrollmentType"></a>

```go
func MfaEnrollmentType() *string
```

- *Type:* *string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.notificationSettings"></a>

```go
func NotificationSettings() DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PhoneCallEnabled`<sup>Required</sup> <a name="PhoneCallEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.phoneCallEnabled"></a>

```go
func PhoneCallEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PushEnabled`<sup>Required</sup> <a name="PushEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.pushEnabled"></a>

```go
func PushEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityQuestionsEnabled`<sup>Required</sup> <a name="SecurityQuestionsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.securityQuestionsEnabled"></a>

```go
func SecurityQuestionsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SmsEnabled`<sup>Required</sup> <a name="SmsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.smsEnabled"></a>

```go
func SmsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsAuthenticationFactorSettingTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList">DataOciIdentityDomainsAuthenticationFactorSettingTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `ThirdPartyFactor`<sup>Required</sup> <a name="ThirdPartyFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.thirdPartyFactor"></a>

```go
func ThirdPartyFactor() DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList</a>

---

##### `TotpEnabled`<sup>Required</sup> <a name="TotpEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpEnabled"></a>

```go
func TotpEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TotpSettings`<sup>Required</sup> <a name="TotpSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.totpSettings"></a>

```go
func TotpSettings() DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings() DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList</a>

---

##### `UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings`<sup>Required</sup> <a name="UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.urnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

```go
func UrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings() DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList</a>

---

##### `UserEnrollmentDisabledFactors`<sup>Required</sup> <a name="UserEnrollmentDisabledFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.userEnrollmentDisabledFactors"></a>

```go
func UserEnrollmentDisabledFactors() *[]*string
```

- *Type:* *[]*string

---

##### `YubicoOtpEnabled`<sup>Required</sup> <a name="YubicoOtpEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.yubicoOtpEnabled"></a>

```go
func YubicoOtpEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthenticationFactorSettingIdInput`<sup>Optional</sup> <a name="AuthenticationFactorSettingIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingIdInput"></a>

```go
func AuthenticationFactorSettingIdInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationFactorSettingId`<sup>Required</sup> <a name="AuthenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authenticationFactorSettingId"></a>

```go
func AuthenticationFactorSettingId() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy <a name="DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingConfig <a name="DataOciIdentityDomainsAuthenticationFactorSettingConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig {
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
	AuthenticationFactorSettingId: *string,
	Authorization: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId">AuthenticationFactorSettingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#idcs_endpoint DataOciIdentityDomainsAuthenticationFactorSetting#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attributes DataOciIdentityDomainsAuthenticationFactorSetting#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#attribute_sets DataOciIdentityDomainsAuthenticationFactorSetting#attribute_sets}.

---

##### `AuthenticationFactorSettingId`<sup>Optional</sup> <a name="AuthenticationFactorSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authenticationFactorSettingId"></a>

```go
AuthenticationFactorSettingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authentication_factor_setting_id DataOciIdentityDomainsAuthenticationFactorSetting#authentication_factor_setting_id}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#authorization DataOciIdentityDomainsAuthenticationFactorSetting#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_authentication_factor_setting#resource_type_schema_version DataOciIdentityDomainsAuthenticationFactorSetting#resource_type_schema_version}.

---

### DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions <a name="DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingMeta <a name="DataOciIdentityDomainsAuthenticationFactorSettingMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingTags <a name="DataOciIdentityDomainsAuthenticationFactorSettingTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingTags {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor <a name="DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings {

}
```


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

&dataociidentitydomainsauthenticationfactorsetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins">HelpDeskCodeExpiryInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled">HelpDeskGenerationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage">HelpDeskMaxUsage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive">MaxActive</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled">SelfServiceGenerationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HelpDeskCodeExpiryInMins`<sup>Required</sup> <a name="HelpDeskCodeExpiryInMins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskCodeExpiryInMins"></a>

```go
func HelpDeskCodeExpiryInMins() *f64
```

- *Type:* *f64

---

##### `HelpDeskGenerationEnabled`<sup>Required</sup> <a name="HelpDeskGenerationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskGenerationEnabled"></a>

```go
func HelpDeskGenerationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HelpDeskMaxUsage`<sup>Required</sup> <a name="HelpDeskMaxUsage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.helpDeskMaxUsage"></a>

```go
func HelpDeskMaxUsage() *f64
```

- *Type:* *f64

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `MaxActive`<sup>Required</sup> <a name="MaxActive" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.maxActive"></a>

```go
func MaxActive() *f64
```

- *Type:* *f64

---

##### `SelfServiceGenerationEnabled`<sup>Required</sup> <a name="SelfServiceGenerationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.selfServiceGenerationEnabled"></a>

```go
func SelfServiceGenerationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings">DataOciIdentityDomainsAuthenticationFactorSettingBypassCodeSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy">DeviceProtectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs">InitialLockoutPeriodInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength">KeyPairLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern">LockoutEscalationPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout">MaxFailuresBeforeLockout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning">MaxFailuresBeforeWarning</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs">MaxLockoutIntervalInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength">MinPinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays">PolicyUpdateFreqInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo">RequestSigningAlgo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding">SharedSecretEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled">UnlockAppForEachRequestEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs">UnlockAppIntervalInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled">UnlockOnAppForegroundEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled">UnlockOnAppStartEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceProtectionPolicy`<sup>Required</sup> <a name="DeviceProtectionPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.deviceProtectionPolicy"></a>

```go
func DeviceProtectionPolicy() *string
```

- *Type:* *string

---

##### `InitialLockoutPeriodInSecs`<sup>Required</sup> <a name="InitialLockoutPeriodInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.initialLockoutPeriodInSecs"></a>

```go
func InitialLockoutPeriodInSecs() *f64
```

- *Type:* *f64

---

##### `KeyPairLength`<sup>Required</sup> <a name="KeyPairLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.keyPairLength"></a>

```go
func KeyPairLength() *f64
```

- *Type:* *f64

---

##### `LockoutEscalationPattern`<sup>Required</sup> <a name="LockoutEscalationPattern" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.lockoutEscalationPattern"></a>

```go
func LockoutEscalationPattern() *string
```

- *Type:* *string

---

##### `MaxFailuresBeforeLockout`<sup>Required</sup> <a name="MaxFailuresBeforeLockout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeLockout"></a>

```go
func MaxFailuresBeforeLockout() *f64
```

- *Type:* *f64

---

##### `MaxFailuresBeforeWarning`<sup>Required</sup> <a name="MaxFailuresBeforeWarning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxFailuresBeforeWarning"></a>

```go
func MaxFailuresBeforeWarning() *f64
```

- *Type:* *f64

---

##### `MaxLockoutIntervalInSecs`<sup>Required</sup> <a name="MaxLockoutIntervalInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.maxLockoutIntervalInSecs"></a>

```go
func MaxLockoutIntervalInSecs() *f64
```

- *Type:* *f64

---

##### `MinPinLength`<sup>Required</sup> <a name="MinPinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.minPinLength"></a>

```go
func MinPinLength() *f64
```

- *Type:* *f64

---

##### `PolicyUpdateFreqInDays`<sup>Required</sup> <a name="PolicyUpdateFreqInDays" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.policyUpdateFreqInDays"></a>

```go
func PolicyUpdateFreqInDays() *f64
```

- *Type:* *f64

---

##### `RequestSigningAlgo`<sup>Required</sup> <a name="RequestSigningAlgo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.requestSigningAlgo"></a>

```go
func RequestSigningAlgo() *string
```

- *Type:* *string

---

##### `SharedSecretEncoding`<sup>Required</sup> <a name="SharedSecretEncoding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.sharedSecretEncoding"></a>

```go
func SharedSecretEncoding() *string
```

- *Type:* *string

---

##### `UnlockAppForEachRequestEnabled`<sup>Required</sup> <a name="UnlockAppForEachRequestEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppForEachRequestEnabled"></a>

```go
func UnlockAppForEachRequestEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UnlockAppIntervalInSecs`<sup>Required</sup> <a name="UnlockAppIntervalInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockAppIntervalInSecs"></a>

```go
func UnlockAppIntervalInSecs() *f64
```

- *Type:* *f64

---

##### `UnlockOnAppForegroundEnabled`<sup>Required</sup> <a name="UnlockOnAppForegroundEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppForegroundEnabled"></a>

```go
func UnlockOnAppForegroundEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UnlockOnAppStartEnabled`<sup>Required</sup> <a name="UnlockOnAppStartEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.unlockOnAppStartEnabled"></a>

```go
func UnlockOnAppStartEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings">DataOciIdentityDomainsAuthenticationFactorSettingClientAppSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList <a name="DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy">DataOciIdentityDomainsAuthenticationFactorSettingCompliancePolicy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl">EmailLinkCustomUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled">EmailLinkEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailLinkCustomUrl`<sup>Required</sup> <a name="EmailLinkCustomUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkCustomUrl"></a>

```go
func EmailLinkCustomUrl() *string
```

- *Type:* *string

---

##### `EmailLinkEnabled`<sup>Required</sup> <a name="EmailLinkEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.emailLinkEnabled"></a>

```go
func EmailLinkEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings">DataOciIdentityDomainsAuthenticationFactorSettingEmailSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays">MaxEndpointTrustDurationInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices">MaxEnrolledDevices</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints">MaxTrustedEndpoints</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled">TrustedEndpointsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxEndpointTrustDurationInDays`<sup>Required</sup> <a name="MaxEndpointTrustDurationInDays" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEndpointTrustDurationInDays"></a>

```go
func MaxEndpointTrustDurationInDays() *f64
```

- *Type:* *f64

---

##### `MaxEnrolledDevices`<sup>Required</sup> <a name="MaxEnrolledDevices" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxEnrolledDevices"></a>

```go
func MaxEnrolledDevices() *f64
```

- *Type:* *f64

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxIncorrectAttempts"></a>

```go
func MaxIncorrectAttempts() *f64
```

- *Type:* *f64

---

##### `MaxTrustedEndpoints`<sup>Required</sup> <a name="MaxTrustedEndpoints" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.maxTrustedEndpoints"></a>

```go
func MaxTrustedEndpoints() *f64
```

- *Type:* *f64

---

##### `TrustedEndpointsEnabled`<sup>Required</sup> <a name="TrustedEndpointsEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.trustedEndpointsEnabled"></a>

```go
func TrustedEndpointsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions">DataOciIdentityDomainsAuthenticationFactorSettingEndpointRestrictions</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy">DataOciIdentityDomainsAuthenticationFactorSettingIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled">MobileNumberEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled">MobileNumberUpdateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MobileNumberEnabled`<sup>Required</sup> <a name="MobileNumberEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberEnabled"></a>

```go
func MobileNumberEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MobileNumberUpdateEnabled`<sup>Required</sup> <a name="MobileNumberUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.mobileNumberUpdateEnabled"></a>

```go
func MobileNumberUpdateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings">DataOciIdentityDomainsAuthenticationFactorSettingIdentityStoreSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingMetaList <a name="DataOciIdentityDomainsAuthenticationFactorSettingMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta">DataOciIdentityDomainsAuthenticationFactorSettingMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingMeta">DataOciIdentityDomainsAuthenticationFactorSettingMeta</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled">PullEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullEnabled`<sup>Required</sup> <a name="PullEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.pullEnabled"></a>

```go
func PullEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings">DataOciIdentityDomainsAuthenticationFactorSettingNotificationSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingTagsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags">DataOciIdentityDomainsAuthenticationFactorSettingTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTags">DataOciIdentityDomainsAuthenticationFactorSettingTags</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList <a name="DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity">DuoSecurity</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DuoSecurity`<sup>Required</sup> <a name="DuoSecurity" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.duoSecurity"></a>

```go
func DuoSecurity() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor">DataOciIdentityDomainsAuthenticationFactorSettingThirdPartyFactor</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins">EmailOtpValidityDurationInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength">EmailPasscodeLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm">HashingAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs">JwtValidityDurationInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays">KeyRefreshIntervalInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength">PasscodeLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins">SmsOtpValidityDurationInMins</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength">SmsPasscodeLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs">TimeStepInSecs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance">TimeStepTolerance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailOtpValidityDurationInMins`<sup>Required</sup> <a name="EmailOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailOtpValidityDurationInMins"></a>

```go
func EmailOtpValidityDurationInMins() *f64
```

- *Type:* *f64

---

##### `EmailPasscodeLength`<sup>Required</sup> <a name="EmailPasscodeLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.emailPasscodeLength"></a>

```go
func EmailPasscodeLength() *f64
```

- *Type:* *f64

---

##### `HashingAlgorithm`<sup>Required</sup> <a name="HashingAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.hashingAlgorithm"></a>

```go
func HashingAlgorithm() *string
```

- *Type:* *string

---

##### `JwtValidityDurationInSecs`<sup>Required</sup> <a name="JwtValidityDurationInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.jwtValidityDurationInSecs"></a>

```go
func JwtValidityDurationInSecs() *f64
```

- *Type:* *f64

---

##### `KeyRefreshIntervalInDays`<sup>Required</sup> <a name="KeyRefreshIntervalInDays" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.keyRefreshIntervalInDays"></a>

```go
func KeyRefreshIntervalInDays() *f64
```

- *Type:* *f64

---

##### `PasscodeLength`<sup>Required</sup> <a name="PasscodeLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.passcodeLength"></a>

```go
func PasscodeLength() *f64
```

- *Type:* *f64

---

##### `SmsOtpValidityDurationInMins`<sup>Required</sup> <a name="SmsOtpValidityDurationInMins" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsOtpValidityDurationInMins"></a>

```go
func SmsOtpValidityDurationInMins() *f64
```

- *Type:* *f64

---

##### `SmsPasscodeLength`<sup>Required</sup> <a name="SmsPasscodeLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.smsPasscodeLength"></a>

```go
func SmsPasscodeLength() *f64
```

- *Type:* *f64

---

##### `TimeStepInSecs`<sup>Required</sup> <a name="TimeStepInSecs" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepInSecs"></a>

```go
func TimeStepInSecs() *f64
```

- *Type:* *f64

---

##### `TimeStepTolerance`<sup>Required</sup> <a name="TimeStepTolerance" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.timeStepTolerance"></a>

```go
func TimeStepTolerance() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings">DataOciIdentityDomainsAuthenticationFactorSettingTotpSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation">Attestation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment">AuthenticatorSelectionAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey">AuthenticatorSelectionRequireResidentKey</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey">AuthenticatorSelectionResidentKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification">AuthenticatorSelectionUserVerification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel">DomainValidationLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials">ExcludeCredentials</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes">PublicKeyTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attestation`<sup>Required</sup> <a name="Attestation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.attestation"></a>

```go
func Attestation() *string
```

- *Type:* *string

---

##### `AuthenticatorSelectionAttachment`<sup>Required</sup> <a name="AuthenticatorSelectionAttachment" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionAttachment"></a>

```go
func AuthenticatorSelectionAttachment() *string
```

- *Type:* *string

---

##### `AuthenticatorSelectionRequireResidentKey`<sup>Required</sup> <a name="AuthenticatorSelectionRequireResidentKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionRequireResidentKey"></a>

```go
func AuthenticatorSelectionRequireResidentKey() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AuthenticatorSelectionResidentKey`<sup>Required</sup> <a name="AuthenticatorSelectionResidentKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionResidentKey"></a>

```go
func AuthenticatorSelectionResidentKey() *string
```

- *Type:* *string

---

##### `AuthenticatorSelectionUserVerification`<sup>Required</sup> <a name="AuthenticatorSelectionUserVerification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.authenticatorSelectionUserVerification"></a>

```go
func AuthenticatorSelectionUserVerification() *string
```

- *Type:* *string

---

##### `DomainValidationLevel`<sup>Required</sup> <a name="DomainValidationLevel" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.domainValidationLevel"></a>

```go
func DomainValidationLevel() *f64
```

- *Type:* *f64

---

##### `ExcludeCredentials`<sup>Required</sup> <a name="ExcludeCredentials" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.excludeCredentials"></a>

```go
func ExcludeCredentials() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PublicKeyTypes`<sup>Required</sup> <a name="PublicKeyTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.publicKeyTypes"></a>

```go
func PublicKeyTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionfidoAuthenticationFactorSettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname">ApiHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey">AttestationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey">IntegrationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute">UserMappingAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiHostname`<sup>Required</sup> <a name="ApiHostname" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.apiHostname"></a>

```go
func ApiHostname() *string
```

- *Type:* *string

---

##### `AttestationKey`<sup>Required</sup> <a name="AttestationKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.attestationKey"></a>

```go
func AttestationKey() *string
```

- *Type:* *string

---

##### `IntegrationKey`<sup>Required</sup> <a name="IntegrationKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.integrationKey"></a>

```go
func IntegrationKey() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `UserMappingAttribute`<sup>Required</sup> <a name="UserMappingAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.userMappingAttribute"></a>

```go
func UserMappingAttribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettings</a>

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference <a name="DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsauthenticationfactorsetting"

dataociidentitydomainsauthenticationfactorsetting.NewDataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings">DuoSecuritySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DuoSecuritySettings`<sup>Required</sup> <a name="DuoSecuritySettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.duoSecuritySettings"></a>

```go
func DuoSecuritySettings() DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsDuoSecuritySettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAuthenticationFactorSetting.DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings">DataOciIdentityDomainsAuthenticationFactorSettingUrnietfparamsscimschemasoracleidcsextensionthirdPartyAuthenticationFactorSettings</a>

---



