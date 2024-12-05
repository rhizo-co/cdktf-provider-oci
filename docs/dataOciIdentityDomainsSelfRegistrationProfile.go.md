# `dataOciIdentityDomainsSelfRegistrationProfile` Submodule <a name="`dataOciIdentityDomainsSelfRegistrationProfile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSelfRegistrationProfile <a name="DataOciIdentityDomainsSelfRegistrationProfile" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile oci_identity_domains_self_registration_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfile(scope Construct, id *string, config DataOciIdentityDomainsSelfRegistrationProfileConfig) DataOciIdentityDomainsSelfRegistrationProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig">DataOciIdentityDomainsSelfRegistrationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig">DataOciIdentityDomainsSelfRegistrationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsSelfRegistrationProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsSelfRegistrationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsSelfRegistrationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSelfRegistrationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.activationEmailRequired">ActivationEmailRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.afterSubmitText">AfterSubmitText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains">AllowedEmailDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentText">ConsentText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList">DataOciIdentityDomainsSelfRegistrationProfileConsentTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentTextPresent">ConsentTextPresent</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.defaultGroups">DefaultGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains">DisallowedEmailDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.displayName">DisplayName</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.emailTemplate">EmailTemplate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerLogo">FooterLogo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerText">FooterText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList">DataOciIdentityDomainsSelfRegistrationProfileFooterTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerLogo">HeaderLogo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerText">HeaderText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList">DataOciIdentityDomainsSelfRegistrationProfileMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid">NumberOfDaysRedirectUrlIsValid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.showOnLoginPage">ShowOnLoginPage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList">DataOciIdentityDomainsSelfRegistrationProfileTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.userAttributes">UserAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileIdInput">SelfRegistrationProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileId">SelfRegistrationProfileId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActivationEmailRequired`<sup>Required</sup> <a name="ActivationEmailRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.activationEmailRequired"></a>

```go
func ActivationEmailRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AfterSubmitText`<sup>Required</sup> <a name="AfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.afterSubmitText"></a>

```go
func AfterSubmitText() DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList</a>

---

##### `AllowedEmailDomains`<sup>Required</sup> <a name="AllowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.allowedEmailDomains"></a>

```go
func AllowedEmailDomains() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `ConsentText`<sup>Required</sup> <a name="ConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentText"></a>

```go
func ConsentText() DataOciIdentityDomainsSelfRegistrationProfileConsentTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList">DataOciIdentityDomainsSelfRegistrationProfileConsentTextList</a>

---

##### `ConsentTextPresent`<sup>Required</sup> <a name="ConsentTextPresent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.consentTextPresent"></a>

```go
func ConsentTextPresent() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DefaultGroups`<sup>Required</sup> <a name="DefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.defaultGroups"></a>

```go
func DefaultGroups() DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList</a>

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisallowedEmailDomains`<sup>Required</sup> <a name="DisallowedEmailDomains" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.disallowedEmailDomains"></a>

```go
func DisallowedEmailDomains() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.displayName"></a>

```go
func DisplayName() DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList">DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList</a>

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `EmailTemplate`<sup>Required</sup> <a name="EmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.emailTemplate"></a>

```go
func EmailTemplate() DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList</a>

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `FooterLogo`<sup>Required</sup> <a name="FooterLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerLogo"></a>

```go
func FooterLogo() *string
```

- *Type:* *string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.footerText"></a>

```go
func FooterText() DataOciIdentityDomainsSelfRegistrationProfileFooterTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList">DataOciIdentityDomainsSelfRegistrationProfileFooterTextList</a>

---

##### `HeaderLogo`<sup>Required</sup> <a name="HeaderLogo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerLogo"></a>

```go
func HeaderLogo() *string
```

- *Type:* *string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.headerText"></a>

```go
func HeaderText() DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList">DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList</a>

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsSelfRegistrationProfileMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList">DataOciIdentityDomainsSelfRegistrationProfileMetaList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberOfDaysRedirectUrlIsValid`<sup>Required</sup> <a name="NumberOfDaysRedirectUrlIsValid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.numberOfDaysRedirectUrlIsValid"></a>

```go
func NumberOfDaysRedirectUrlIsValid() *f64
```

- *Type:* *f64

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `ShowOnLoginPage`<sup>Required</sup> <a name="ShowOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.showOnLoginPage"></a>

```go
func ShowOnLoginPage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsSelfRegistrationProfileTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList">DataOciIdentityDomainsSelfRegistrationProfileTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UserAttributes`<sup>Required</sup> <a name="UserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.userAttributes"></a>

```go
func UserAttributes() DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList">DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList</a>

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SelfRegistrationProfileIdInput`<sup>Optional</sup> <a name="SelfRegistrationProfileIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileIdInput"></a>

```go
func SelfRegistrationProfileIdInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SelfRegistrationProfileId`<sup>Required</sup> <a name="SelfRegistrationProfileId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.selfRegistrationProfileId"></a>

```go
func SelfRegistrationProfileId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileConfig <a name="DataOciIdentityDomainsSelfRegistrationProfileConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdcsEndpoint: *string,
	SelfRegistrationProfileId: *string,
	Attributes: *string,
	AttributeSets: *[]*string,
	Authorization: *string,
	ResourceTypeSchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.selfRegistrationProfileId">SelfRegistrationProfileId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#idcs_endpoint DataOciIdentityDomainsSelfRegistrationProfile#idcs_endpoint}.

---

##### `SelfRegistrationProfileId`<sup>Required</sup> <a name="SelfRegistrationProfileId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.selfRegistrationProfileId"></a>

```go
SelfRegistrationProfileId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#self_registration_profile_id DataOciIdentityDomainsSelfRegistrationProfile#self_registration_profile_id}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attributes DataOciIdentityDomainsSelfRegistrationProfile#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#attribute_sets DataOciIdentityDomainsSelfRegistrationProfile#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#authorization DataOciIdentityDomainsSelfRegistrationProfile#authorization}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_self_registration_profile#resource_type_schema_version DataOciIdentityDomainsSelfRegistrationProfile#resource_type_schema_version}.

---

### DataOciIdentityDomainsSelfRegistrationProfileConsentText <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileConsentText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileDisplayName <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileFooterText <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileFooterText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileHeaderText <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileMeta <a name="DataOciIdentityDomainsSelfRegistrationProfileMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileMeta {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileTags <a name="DataOciIdentityDomainsSelfRegistrationProfileTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileTags {

}
```


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributes <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

&dataociidentitydomainsselfregistrationprofile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText">DataOciIdentityDomainsSelfRegistrationProfileAfterSubmitText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileConsentTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileConsentTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileConsentTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText">DataOciIdentityDomainsSelfRegistrationProfileConsentText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileConsentText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileConsentText">DataOciIdentityDomainsSelfRegistrationProfileConsentText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups">DataOciIdentityDomainsSelfRegistrationProfileDefaultGroups</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileDisplayNameList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName">DataOciIdentityDomainsSelfRegistrationProfileDisplayName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayNameOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileDisplayName
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileDisplayName">DataOciIdentityDomainsSelfRegistrationProfileDisplayName</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate">DataOciIdentityDomainsSelfRegistrationProfileEmailTemplate</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileFooterTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileFooterTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileFooterTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText">DataOciIdentityDomainsSelfRegistrationProfileFooterText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileFooterText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileFooterText">DataOciIdentityDomainsSelfRegistrationProfileFooterText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileHeaderTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText">DataOciIdentityDomainsSelfRegistrationProfileHeaderText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileHeaderText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileHeaderText">DataOciIdentityDomainsSelfRegistrationProfileHeaderText</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy">DataOciIdentityDomainsSelfRegistrationProfileIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileMetaList <a name="DataOciIdentityDomainsSelfRegistrationProfileMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta">DataOciIdentityDomainsSelfRegistrationProfileMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileMeta">DataOciIdentityDomainsSelfRegistrationProfileMeta</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileTagsList <a name="DataOciIdentityDomainsSelfRegistrationProfileTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags">DataOciIdentityDomainsSelfRegistrationProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileTags">DataOciIdentityDomainsSelfRegistrationProfileTags</a>

---


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileUserAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference <a name="DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsselfregistrationprofile"

dataociidentitydomainsselfregistrationprofile.NewDataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable">Deletable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName">FullyQualifiedAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber">SeqNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes">DataOciIdentityDomainsSelfRegistrationProfileUserAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.deletable"></a>

```go
func Deletable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FullyQualifiedAttributeName`<sup>Required</sup> <a name="FullyQualifiedAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.fullyQualifiedAttributeName"></a>

```go
func FullyQualifiedAttributeName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `SeqNumber`<sup>Required</sup> <a name="SeqNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.seqNumber"></a>

```go
func SeqNumber() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSelfRegistrationProfileUserAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSelfRegistrationProfile.DataOciIdentityDomainsSelfRegistrationProfileUserAttributes">DataOciIdentityDomainsSelfRegistrationProfileUserAttributes</a>

---



