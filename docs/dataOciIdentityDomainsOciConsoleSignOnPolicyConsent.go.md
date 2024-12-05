# `dataOciIdentityDomainsOciConsoleSignOnPolicyConsent` Submodule <a name="`dataOciIdentityDomainsOciConsoleSignOnPolicyConsent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsent <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent oci_identity_domains_oci_console_sign_on_policy_consent}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsent(scope Construct, id *string, config DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig) DataOciIdentityDomainsOciConsoleSignOnPolicyConsent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsOciConsoleSignOnPolicyConsent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsOciConsoleSignOnPolicyConsent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsOciConsoleSignOnPolicyConsent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsOciConsoleSignOnPolicyConsent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.changeType">ChangeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.clientIp">ClientIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.consentSignedBy">ConsentSignedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.modifiedResource">ModifiedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.notificationRecipients">NotificationRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.policyResource">PolicyResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.timeConsentSigned">TimeConsentSigned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentIdInput">OciConsoleSignOnPolicyConsentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentId">OciConsoleSignOnPolicyConsentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ChangeType`<sup>Required</sup> <a name="ChangeType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.changeType"></a>

```go
func ChangeType() *string
```

- *Type:* *string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.clientIp"></a>

```go
func ClientIp() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `ConsentSignedBy`<sup>Required</sup> <a name="ConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.consentSignedBy"></a>

```go
func ConsentSignedBy() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList</a>

---

##### `ModifiedResource`<sup>Required</sup> <a name="ModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.modifiedResource"></a>

```go
func ModifiedResource() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList</a>

---

##### `NotificationRecipients`<sup>Required</sup> <a name="NotificationRecipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.notificationRecipients"></a>

```go
func NotificationRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PolicyResource`<sup>Required</sup> <a name="PolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.policyResource"></a>

```go
func PolicyResource() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList</a>

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `TimeConsentSigned`<sup>Required</sup> <a name="TimeConsentSigned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.timeConsentSigned"></a>

```go
func TimeConsentSigned() *string
```

- *Type:* *string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OciConsoleSignOnPolicyConsentIdInput`<sup>Optional</sup> <a name="OciConsoleSignOnPolicyConsentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentIdInput"></a>

```go
func OciConsoleSignOnPolicyConsentIdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `OciConsoleSignOnPolicyConsentId`<sup>Required</sup> <a name="OciConsoleSignOnPolicyConsentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.ociConsoleSignOnPolicyConsentId"></a>

```go
func OciConsoleSignOnPolicyConsentId() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	OciConsoleSignOnPolicyConsentId: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	Id: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.ociConsoleSignOnPolicyConsentId">OciConsoleSignOnPolicyConsentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#idcs_endpoint DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#idcs_endpoint}.

---

##### `OciConsoleSignOnPolicyConsentId`<sup>Required</sup> <a name="OciConsoleSignOnPolicyConsentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.ociConsoleSignOnPolicyConsentId"></a>

```go
OciConsoleSignOnPolicyConsentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#oci_console_sign_on_policy_consent_id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#oci_console_sign_on_policy_consent_id}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attributes DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#attribute_sets DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#authorization DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#authorization}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#id DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_oci_console_sign_on_policy_consent#resource_type_schema_version DataOciIdentityDomainsOciConsoleSignOnPolicyConsent#resource_type_schema_version}.

---

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy {

}
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy {

}
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta {

}
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource {

}
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource {

}
```


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

&dataociidentitydomainsociconsolesignonpolicyconsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentConsentSignedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsCreatedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentMeta</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentModifiedResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentPolicyResource</a>

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference <a name="DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsociconsolesignonpolicyconsent"

dataociidentitydomainsociconsolesignonpolicyconsent.NewDataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsOciConsoleSignOnPolicyConsent.DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags">DataOciIdentityDomainsOciConsoleSignOnPolicyConsentTags</a>

---



