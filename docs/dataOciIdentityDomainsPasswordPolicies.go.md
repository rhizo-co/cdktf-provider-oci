# `dataOciIdentityDomainsPasswordPolicies` Submodule <a name="`dataOciIdentityDomainsPasswordPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsPasswordPolicies <a name="DataOciIdentityDomainsPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies oci_identity_domains_password_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPolicies(scope Construct, id *string, config DataOciIdentityDomainsPasswordPoliciesConfig) DataOciIdentityDomainsPasswordPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig">DataOciIdentityDomainsPasswordPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig">DataOciIdentityDomainsPasswordPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount">ResetPasswordPolicyCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter">ResetPasswordPolicyFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetId"></a>

```go
func ResetId()
```

##### `ResetPasswordPolicyCount` <a name="ResetPasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyCount"></a>

```go
func ResetPasswordPolicyCount()
```

##### `ResetPasswordPolicyFilter` <a name="ResetPasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetPasswordPolicyFilter"></a>

```go
func ResetPasswordPolicyFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsPasswordPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsPasswordPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsPasswordPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsPasswordPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies">PasswordPolicies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput">PasswordPolicyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput">PasswordPolicyFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount">PasswordPolicyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter">PasswordPolicyFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `PasswordPolicies`<sup>Required</sup> <a name="PasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicies"></a>

```go
func PasswordPolicies() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyCountInput`<sup>Optional</sup> <a name="PasswordPolicyCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCountInput"></a>

```go
func PasswordPolicyCountInput() *f64
```

- *Type:* *f64

---

##### `PasswordPolicyFilterInput`<sup>Optional</sup> <a name="PasswordPolicyFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilterInput"></a>

```go
func PasswordPolicyFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `PasswordPolicyCount`<sup>Required</sup> <a name="PasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyCount"></a>

```go
func PasswordPolicyCount() *f64
```

- *Type:* *f64

---

##### `PasswordPolicyFilter`<sup>Required</sup> <a name="PasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.passwordPolicyFilter"></a>

```go
func PasswordPolicyFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsPasswordPoliciesConfig <a name="DataOciIdentityDomainsPasswordPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesConfig {
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
	PasswordPolicyCount: *f64,
	PasswordPolicyFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount">PasswordPolicyCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter">PasswordPolicyFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#idcs_endpoint DataOciIdentityDomainsPasswordPolicies#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attributes DataOciIdentityDomainsPasswordPolicies#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#attribute_sets DataOciIdentityDomainsPasswordPolicies#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#authorization DataOciIdentityDomainsPasswordPolicies#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#compartment_id DataOciIdentityDomainsPasswordPolicies#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#id DataOciIdentityDomainsPasswordPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PasswordPolicyCount`<sup>Optional</sup> <a name="PasswordPolicyCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyCount"></a>

```go
PasswordPolicyCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_count DataOciIdentityDomainsPasswordPolicies#password_policy_count}.

---

##### `PasswordPolicyFilter`<sup>Optional</sup> <a name="PasswordPolicyFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.passwordPolicyFilter"></a>

```go
PasswordPolicyFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#password_policy_filter DataOciIdentityDomainsPasswordPolicies#password_policy_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#resource_type_schema_version DataOciIdentityDomainsPasswordPolicies#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_by DataOciIdentityDomainsPasswordPolicies#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#sort_order DataOciIdentityDomainsPasswordPolicies#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_password_policies#start_index DataOciIdentityDomainsPasswordPolicies#start_index}.

---

### DataOciIdentityDomainsPasswordPoliciesPasswordPolicies <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPolicies" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies {

}
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules {

}
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups {

}
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy {

}
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta {

}
```


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

&dataociidentitydomainspasswordpolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRules</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroups</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMeta</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars">AllowedChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules">ConfiguredPasswordPolicyRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter">DictionaryDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation">DictionaryLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed">DictionaryWordDisallowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars">DisallowedChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings">DisallowedSubstrings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues">DisallowedUserAttributeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters">DistinctCharacters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed">FirstNameDisallowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset">ForcePasswordReset</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups">Groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed">LastNameDisallowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration">LockoutDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts">MaxIncorrectAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars">MaxRepeatedChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars">MaxSpecialChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals">MinAlphaNumerals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas">MinAlphas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase">MinLowerCase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals">MinNumerals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge">MinPasswordAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars">MinSpecialChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars">MinUniqueChars</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase">MinUpperCase</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory">NumPasswordsInHistory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter">PasswordExpiresAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning">PasswordExpireWarning</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength">PasswordStrength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars">RequiredChars</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet">StartsWithAlphabet</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed">UserNameDisallowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedChars`<sup>Required</sup> <a name="AllowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.allowedChars"></a>

```go
func AllowedChars() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `ConfiguredPasswordPolicyRules`<sup>Required</sup> <a name="ConfiguredPasswordPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.configuredPasswordPolicyRules"></a>

```go
func ConfiguredPasswordPolicyRules() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesConfiguredPasswordPolicyRulesList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DictionaryDelimiter`<sup>Required</sup> <a name="DictionaryDelimiter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryDelimiter"></a>

```go
func DictionaryDelimiter() *string
```

- *Type:* *string

---

##### `DictionaryLocation`<sup>Required</sup> <a name="DictionaryLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryLocation"></a>

```go
func DictionaryLocation() *string
```

- *Type:* *string

---

##### `DictionaryWordDisallowed`<sup>Required</sup> <a name="DictionaryWordDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.dictionaryWordDisallowed"></a>

```go
func DictionaryWordDisallowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisallowedChars`<sup>Required</sup> <a name="DisallowedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedChars"></a>

```go
func DisallowedChars() *string
```

- *Type:* *string

---

##### `DisallowedSubstrings`<sup>Required</sup> <a name="DisallowedSubstrings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedSubstrings"></a>

```go
func DisallowedSubstrings() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedUserAttributeValues`<sup>Required</sup> <a name="DisallowedUserAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.disallowedUserAttributeValues"></a>

```go
func DisallowedUserAttributeValues() *[]*string
```

- *Type:* *[]*string

---

##### `DistinctCharacters`<sup>Required</sup> <a name="DistinctCharacters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.distinctCharacters"></a>

```go
func DistinctCharacters() *f64
```

- *Type:* *f64

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `FirstNameDisallowed`<sup>Required</sup> <a name="FirstNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.firstNameDisallowed"></a>

```go
func FirstNameDisallowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ForcePasswordReset`<sup>Required</sup> <a name="ForcePasswordReset" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.forcePasswordReset"></a>

```go
func ForcePasswordReset() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.groups"></a>

```go
func Groups() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesGroupsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `LastNameDisallowed`<sup>Required</sup> <a name="LastNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lastNameDisallowed"></a>

```go
func LastNameDisallowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.lockoutDuration"></a>

```go
func LockoutDuration() *f64
```

- *Type:* *f64

---

##### `MaxIncorrectAttempts`<sup>Required</sup> <a name="MaxIncorrectAttempts" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxIncorrectAttempts"></a>

```go
func MaxIncorrectAttempts() *f64
```

- *Type:* *f64

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MaxRepeatedChars`<sup>Required</sup> <a name="MaxRepeatedChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxRepeatedChars"></a>

```go
func MaxRepeatedChars() *f64
```

- *Type:* *f64

---

##### `MaxSpecialChars`<sup>Required</sup> <a name="MaxSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.maxSpecialChars"></a>

```go
func MaxSpecialChars() *f64
```

- *Type:* *f64

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesMetaList</a>

---

##### `MinAlphaNumerals`<sup>Required</sup> <a name="MinAlphaNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphaNumerals"></a>

```go
func MinAlphaNumerals() *f64
```

- *Type:* *f64

---

##### `MinAlphas`<sup>Required</sup> <a name="MinAlphas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minAlphas"></a>

```go
func MinAlphas() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `MinLowerCase`<sup>Required</sup> <a name="MinLowerCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minLowerCase"></a>

```go
func MinLowerCase() *f64
```

- *Type:* *f64

---

##### `MinNumerals`<sup>Required</sup> <a name="MinNumerals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minNumerals"></a>

```go
func MinNumerals() *f64
```

- *Type:* *f64

---

##### `MinPasswordAge`<sup>Required</sup> <a name="MinPasswordAge" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minPasswordAge"></a>

```go
func MinPasswordAge() *f64
```

- *Type:* *f64

---

##### `MinSpecialChars`<sup>Required</sup> <a name="MinSpecialChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minSpecialChars"></a>

```go
func MinSpecialChars() *f64
```

- *Type:* *f64

---

##### `MinUniqueChars`<sup>Required</sup> <a name="MinUniqueChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUniqueChars"></a>

```go
func MinUniqueChars() *f64
```

- *Type:* *f64

---

##### `MinUpperCase`<sup>Required</sup> <a name="MinUpperCase" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.minUpperCase"></a>

```go
func MinUpperCase() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumPasswordsInHistory`<sup>Required</sup> <a name="NumPasswordsInHistory" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.numPasswordsInHistory"></a>

```go
func NumPasswordsInHistory() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PasswordExpiresAfter`<sup>Required</sup> <a name="PasswordExpiresAfter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpiresAfter"></a>

```go
func PasswordExpiresAfter() *f64
```

- *Type:* *f64

---

##### `PasswordExpireWarning`<sup>Required</sup> <a name="PasswordExpireWarning" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordExpireWarning"></a>

```go
func PasswordExpireWarning() *f64
```

- *Type:* *f64

---

##### `PasswordStrength`<sup>Required</sup> <a name="PasswordStrength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.passwordStrength"></a>

```go
func PasswordStrength() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RequiredChars`<sup>Required</sup> <a name="RequiredChars" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.requiredChars"></a>

```go
func RequiredChars() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWithAlphabet`<sup>Required</sup> <a name="StartsWithAlphabet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.startsWithAlphabet"></a>

```go
func StartsWithAlphabet() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UserNameDisallowed`<sup>Required</sup> <a name="UserNameDisallowed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.userNameDisallowed"></a>

```go
func UserNameDisallowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPolicies">DataOciIdentityDomainsPasswordPoliciesPasswordPolicies</a>

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference <a name="DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainspasswordpolicies"

dataociidentitydomainspasswordpolicies.NewDataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsPasswordPolicies.DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags">DataOciIdentityDomainsPasswordPoliciesPasswordPoliciesTags</a>

---



