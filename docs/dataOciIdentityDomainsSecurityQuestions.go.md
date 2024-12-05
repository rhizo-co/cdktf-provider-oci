# `dataOciIdentityDomainsSecurityQuestions` Submodule <a name="`dataOciIdentityDomainsSecurityQuestions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsSecurityQuestions <a name="DataOciIdentityDomainsSecurityQuestions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions oci_identity_domains_security_questions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestions(scope Construct, id *string, config DataOciIdentityDomainsSecurityQuestionsConfig) DataOciIdentityDomainsSecurityQuestions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig">DataOciIdentityDomainsSecurityQuestionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig">DataOciIdentityDomainsSecurityQuestionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionCount">ResetSecurityQuestionCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionFilter">ResetSecurityQuestionFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSecurityQuestionCount` <a name="ResetSecurityQuestionCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionCount"></a>

```go
func ResetSecurityQuestionCount()
```

##### `ResetSecurityQuestionFilter` <a name="ResetSecurityQuestionFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSecurityQuestionFilter"></a>

```go
func ResetSecurityQuestionFilter()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsSecurityQuestions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsSecurityQuestions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsSecurityQuestions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsSecurityQuestions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsSecurityQuestions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestions">SecurityQuestions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCountInput">SecurityQuestionCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilterInput">SecurityQuestionFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCount">SecurityQuestionCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilter">SecurityQuestionFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityQuestions`<sup>Required</sup> <a name="SecurityQuestions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestions"></a>

```go
func SecurityQuestions() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList</a>

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SecurityQuestionCountInput`<sup>Optional</sup> <a name="SecurityQuestionCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCountInput"></a>

```go
func SecurityQuestionCountInput() *f64
```

- *Type:* *f64

---

##### `SecurityQuestionFilterInput`<sup>Optional</sup> <a name="SecurityQuestionFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilterInput"></a>

```go
func SecurityQuestionFilterInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SecurityQuestionCount`<sup>Required</sup> <a name="SecurityQuestionCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionCount"></a>

```go
func SecurityQuestionCount() *f64
```

- *Type:* *f64

---

##### `SecurityQuestionFilter`<sup>Required</sup> <a name="SecurityQuestionFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.securityQuestionFilter"></a>

```go
func SecurityQuestionFilter() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsSecurityQuestionsConfig <a name="DataOciIdentityDomainsSecurityQuestionsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsConfig {
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
	SecurityQuestionCount: *f64,
	SecurityQuestionFilter: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#idcs_endpoint DataOciIdentityDomainsSecurityQuestions#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attributes DataOciIdentityDomainsSecurityQuestions#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attribute_sets DataOciIdentityDomainsSecurityQuestions#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#authorization DataOciIdentityDomainsSecurityQuestions#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#compartment_id DataOciIdentityDomainsSecurityQuestions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#id DataOciIdentityDomainsSecurityQuestions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#resource_type_schema_version DataOciIdentityDomainsSecurityQuestions#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionCount">SecurityQuestionCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_count DataOciIdentityDomainsSecurityQuestions#security_question_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionFilter">SecurityQuestionFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_filter DataOciIdentityDomainsSecurityQuestions#security_question_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_by DataOciIdentityDomainsSecurityQuestions#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_order DataOciIdentityDomainsSecurityQuestions#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#start_index DataOciIdentityDomainsSecurityQuestions#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#idcs_endpoint DataOciIdentityDomainsSecurityQuestions#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attributes DataOciIdentityDomainsSecurityQuestions#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#attribute_sets DataOciIdentityDomainsSecurityQuestions#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#authorization DataOciIdentityDomainsSecurityQuestions#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#compartment_id DataOciIdentityDomainsSecurityQuestions#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#id DataOciIdentityDomainsSecurityQuestions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#resource_type_schema_version DataOciIdentityDomainsSecurityQuestions#resource_type_schema_version}.

---

##### `SecurityQuestionCount`<sup>Optional</sup> <a name="SecurityQuestionCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionCount"></a>

```go
SecurityQuestionCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_count DataOciIdentityDomainsSecurityQuestions#security_question_count}.

---

##### `SecurityQuestionFilter`<sup>Optional</sup> <a name="SecurityQuestionFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.securityQuestionFilter"></a>

```go
SecurityQuestionFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#security_question_filter DataOciIdentityDomainsSecurityQuestions#security_question_filter}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_by DataOciIdentityDomainsSecurityQuestions#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#sort_order DataOciIdentityDomainsSecurityQuestions#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_security_questions#start_index DataOciIdentityDomainsSecurityQuestions#start_index}.

---

### DataOciIdentityDomainsSecurityQuestionsSecurityQuestions <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions {

}
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta {

}
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText {

}
```


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

&dataociidentitydomainssecurityquestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMeta</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.questionText">QuestionText</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions">DataOciIdentityDomainsSecurityQuestionsSecurityQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsMetaList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `QuestionText`<sup>Required</sup> <a name="QuestionText" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.questionText"></a>

```go
func QuestionText() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList</a>

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSecurityQuestionsSecurityQuestions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestions">DataOciIdentityDomainsSecurityQuestionsSecurityQuestions</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.default">Default</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.default"></a>

```go
func Default() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionTextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsQuestionText</a>

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference <a name="DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainssecurityquestions"

dataociidentitydomainssecurityquestions.NewDataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsSecurityQuestions.DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags">DataOciIdentityDomainsSecurityQuestionsSecurityQuestionsTags</a>

---



