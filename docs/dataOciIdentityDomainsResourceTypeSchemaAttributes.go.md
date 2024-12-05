# `dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule <a name="`dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes oci_identity_domains_resource_type_schema_attributes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributes(scope Construct, id *string, config DataOciIdentityDomainsResourceTypeSchemaAttributesConfig) DataOciIdentityDomainsResourceTypeSchemaAttributes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig">DataOciIdentityDomainsResourceTypeSchemaAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig">DataOciIdentityDomainsResourceTypeSchemaAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount">ResetResourceTypeSchemaAttributeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter">ResetResourceTypeSchemaAttributeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaAttributeCount` <a name="ResetResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount"></a>

```go
func ResetResourceTypeSchemaAttributeCount()
```

##### `ResetResourceTypeSchemaAttributeFilter` <a name="ResetResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter"></a>

```go
func ResetResourceTypeSchemaAttributeFilter()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsResourceTypeSchemaAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsResourceTypeSchemaAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsResourceTypeSchemaAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes">ResourceTypeSchemaAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput">ResourceTypeSchemaAttributeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput">ResourceTypeSchemaAttributeFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount">ResourceTypeSchemaAttributeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter">ResourceTypeSchemaAttributeFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `ResourceTypeSchemaAttributes`<sup>Required</sup> <a name="ResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes"></a>

```go
func ResourceTypeSchemaAttributes() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a>

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaAttributeCountInput`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput"></a>

```go
func ResourceTypeSchemaAttributeCountInput() *f64
```

- *Type:* *f64

---

##### `ResourceTypeSchemaAttributeFilterInput`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput"></a>

```go
func ResourceTypeSchemaAttributeFilterInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaAttributeCount`<sup>Required</sup> <a name="ResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount"></a>

```go
func ResourceTypeSchemaAttributeCount() *f64
```

- *Type:* *f64

---

##### `ResourceTypeSchemaAttributeFilter`<sup>Required</sup> <a name="ResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter"></a>

```go
func ResourceTypeSchemaAttributeFilter() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesConfig <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

&dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig {
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
	ResourceTypeSchemaAttributeCount: *f64,
	ResourceTypeSchemaAttributeFilter: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount">ResourceTypeSchemaAttributeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter">ResourceTypeSchemaAttributeFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaAttributeCount`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount"></a>

```go
ResourceTypeSchemaAttributeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}.

---

##### `ResourceTypeSchemaAttributeFilter`<sup>Optional</sup> <a name="ResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter"></a>

```go
ResourceTypeSchemaAttributeFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}.

---

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

&dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes {

}
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

&dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy {

}
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

&dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

&dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta {

}
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

&dataociidentitydomainsresourcetypeschemaattributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues">CanonicalValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact">CaseExact</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability">EndUserMutability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues">EndUserMutabilityAllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber">IdcsAddedSinceReleaseNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion">IdcsAddedSinceVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable">IdcsAttributeCacheable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable">IdcsAttributeMappable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable">IdcsAuditable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName">IdcsAutoIncrementSeqName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter">IdcsCanonicalValueSourceFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType">IdcsCanonicalValueSourceResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey">IdcsCompositeKey</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName">IdcsCsvColumnHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute">IdcsCustomAttribute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber">IdcsDeprecatedSinceReleaseNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion">IdcsDeprecatedSinceVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName">IdcsDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId">IdcsDisplayNameMessageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues">IdcsFetchComplexAttributeValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper">IdcsFromTargetMapper</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName">IdcsFullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated">IdcsGenerated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType">IdcsIcfAttributeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName">IdcsIcfBundleAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired">IdcsIcfRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes">IdcsIndirectRefResourceAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal">IdcsInternal</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength">IdcsMaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue">IdcsMaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength">IdcsMinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue">IdcsMinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage">IdcsMultiLanguage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute">IdcsRefResourceAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes">IdcsRefResourceAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn">IdcsSchemaUrn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant">IdcsScimCompliant</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable">IdcsSearchable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive">IdcsSensitive</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName">IdcsTargetAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom">IdcsTargetAttributeNameToMigrateFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName">IdcsTargetNormAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName">IdcsTargetUniqueConstraintName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper">IdcsToTargetMapper</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue">IdcsTrimStringValue</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference">IdcsValidateReference</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted">IdcsValuePersisted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued">MultiValued</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability">Mutability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes">ReferenceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required">Required</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned">Returned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness">Uniqueness</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanonicalValues`<sup>Required</sup> <a name="CanonicalValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues"></a>

```go
func CanonicalValues() *[]*string
```

- *Type:* *[]*string

---

##### `CaseExact`<sup>Required</sup> <a name="CaseExact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact"></a>

```go
func CaseExact() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `EndUserMutability`<sup>Required</sup> <a name="EndUserMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability"></a>

```go
func EndUserMutability() *string
```

- *Type:* *string

---

##### `EndUserMutabilityAllowedValues`<sup>Required</sup> <a name="EndUserMutabilityAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues"></a>

```go
func EndUserMutabilityAllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsAddedSinceReleaseNumber`<sup>Required</sup> <a name="IdcsAddedSinceReleaseNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber"></a>

```go
func IdcsAddedSinceReleaseNumber() *string
```

- *Type:* *string

---

##### `IdcsAddedSinceVersion`<sup>Required</sup> <a name="IdcsAddedSinceVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion"></a>

```go
func IdcsAddedSinceVersion() *f64
```

- *Type:* *f64

---

##### `IdcsAttributeCacheable`<sup>Required</sup> <a name="IdcsAttributeCacheable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable"></a>

```go
func IdcsAttributeCacheable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsAttributeMappable`<sup>Required</sup> <a name="IdcsAttributeMappable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable"></a>

```go
func IdcsAttributeMappable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsAuditable`<sup>Required</sup> <a name="IdcsAuditable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable"></a>

```go
func IdcsAuditable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsAutoIncrementSeqName`<sup>Required</sup> <a name="IdcsAutoIncrementSeqName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName"></a>

```go
func IdcsAutoIncrementSeqName() *string
```

- *Type:* *string

---

##### `IdcsCanonicalValueSourceFilter`<sup>Required</sup> <a name="IdcsCanonicalValueSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter"></a>

```go
func IdcsCanonicalValueSourceFilter() *string
```

- *Type:* *string

---

##### `IdcsCanonicalValueSourceResourceType`<sup>Required</sup> <a name="IdcsCanonicalValueSourceResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType"></a>

```go
func IdcsCanonicalValueSourceResourceType() *string
```

- *Type:* *string

---

##### `IdcsCompositeKey`<sup>Required</sup> <a name="IdcsCompositeKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey"></a>

```go
func IdcsCompositeKey() *[]*string
```

- *Type:* *[]*string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a>

---

##### `IdcsCsvColumnHeaderName`<sup>Required</sup> <a name="IdcsCsvColumnHeaderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName"></a>

```go
func IdcsCsvColumnHeaderName() *string
```

- *Type:* *string

---

##### `IdcsCustomAttribute`<sup>Required</sup> <a name="IdcsCustomAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute"></a>

```go
func IdcsCustomAttribute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsDeprecatedSinceReleaseNumber`<sup>Required</sup> <a name="IdcsDeprecatedSinceReleaseNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber"></a>

```go
func IdcsDeprecatedSinceReleaseNumber() *string
```

- *Type:* *string

---

##### `IdcsDeprecatedSinceVersion`<sup>Required</sup> <a name="IdcsDeprecatedSinceVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion"></a>

```go
func IdcsDeprecatedSinceVersion() *f64
```

- *Type:* *f64

---

##### `IdcsDisplayName`<sup>Required</sup> <a name="IdcsDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName"></a>

```go
func IdcsDisplayName() *string
```

- *Type:* *string

---

##### `IdcsDisplayNameMessageId`<sup>Required</sup> <a name="IdcsDisplayNameMessageId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId"></a>

```go
func IdcsDisplayNameMessageId() *string
```

- *Type:* *string

---

##### `IdcsFetchComplexAttributeValues`<sup>Required</sup> <a name="IdcsFetchComplexAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues"></a>

```go
func IdcsFetchComplexAttributeValues() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsFromTargetMapper`<sup>Required</sup> <a name="IdcsFromTargetMapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper"></a>

```go
func IdcsFromTargetMapper() *string
```

- *Type:* *string

---

##### `IdcsFullyQualifiedName`<sup>Required</sup> <a name="IdcsFullyQualifiedName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName"></a>

```go
func IdcsFullyQualifiedName() *string
```

- *Type:* *string

---

##### `IdcsGenerated`<sup>Required</sup> <a name="IdcsGenerated" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated"></a>

```go
func IdcsGenerated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsIcfAttributeType`<sup>Required</sup> <a name="IdcsIcfAttributeType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType"></a>

```go
func IdcsIcfAttributeType() *string
```

- *Type:* *string

---

##### `IdcsIcfBundleAttributeName`<sup>Required</sup> <a name="IdcsIcfBundleAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName"></a>

```go
func IdcsIcfBundleAttributeName() *string
```

- *Type:* *string

---

##### `IdcsIcfRequired`<sup>Required</sup> <a name="IdcsIcfRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired"></a>

```go
func IdcsIcfRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsIndirectRefResourceAttributes`<sup>Required</sup> <a name="IdcsIndirectRefResourceAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes"></a>

```go
func IdcsIndirectRefResourceAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `IdcsInternal`<sup>Required</sup> <a name="IdcsInternal" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal"></a>

```go
func IdcsInternal() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsMaxLength`<sup>Required</sup> <a name="IdcsMaxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength"></a>

```go
func IdcsMaxLength() *f64
```

- *Type:* *f64

---

##### `IdcsMaxValue`<sup>Required</sup> <a name="IdcsMaxValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue"></a>

```go
func IdcsMaxValue() *f64
```

- *Type:* *f64

---

##### `IdcsMinLength`<sup>Required</sup> <a name="IdcsMinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength"></a>

```go
func IdcsMinLength() *f64
```

- *Type:* *f64

---

##### `IdcsMinValue`<sup>Required</sup> <a name="IdcsMinValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue"></a>

```go
func IdcsMinValue() *f64
```

- *Type:* *f64

---

##### `IdcsMultiLanguage`<sup>Required</sup> <a name="IdcsMultiLanguage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage"></a>

```go
func IdcsMultiLanguage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IdcsRefResourceAttribute`<sup>Required</sup> <a name="IdcsRefResourceAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute"></a>

```go
func IdcsRefResourceAttribute() *string
```

- *Type:* *string

---

##### `IdcsRefResourceAttributes`<sup>Required</sup> <a name="IdcsRefResourceAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes"></a>

```go
func IdcsRefResourceAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `IdcsSchemaUrn`<sup>Required</sup> <a name="IdcsSchemaUrn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn"></a>

```go
func IdcsSchemaUrn() *string
```

- *Type:* *string

---

##### `IdcsScimCompliant`<sup>Required</sup> <a name="IdcsScimCompliant" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant"></a>

```go
func IdcsScimCompliant() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsSearchable`<sup>Required</sup> <a name="IdcsSearchable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable"></a>

```go
func IdcsSearchable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsSensitive`<sup>Required</sup> <a name="IdcsSensitive" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive"></a>

```go
func IdcsSensitive() *string
```

- *Type:* *string

---

##### `IdcsTargetAttributeName`<sup>Required</sup> <a name="IdcsTargetAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName"></a>

```go
func IdcsTargetAttributeName() *string
```

- *Type:* *string

---

##### `IdcsTargetAttributeNameToMigrateFrom`<sup>Required</sup> <a name="IdcsTargetAttributeNameToMigrateFrom" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom"></a>

```go
func IdcsTargetAttributeNameToMigrateFrom() *string
```

- *Type:* *string

---

##### `IdcsTargetNormAttributeName`<sup>Required</sup> <a name="IdcsTargetNormAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName"></a>

```go
func IdcsTargetNormAttributeName() *string
```

- *Type:* *string

---

##### `IdcsTargetUniqueConstraintName`<sup>Required</sup> <a name="IdcsTargetUniqueConstraintName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName"></a>

```go
func IdcsTargetUniqueConstraintName() *string
```

- *Type:* *string

---

##### `IdcsToTargetMapper`<sup>Required</sup> <a name="IdcsToTargetMapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper"></a>

```go
func IdcsToTargetMapper() *string
```

- *Type:* *string

---

##### `IdcsTrimStringValue`<sup>Required</sup> <a name="IdcsTrimStringValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue"></a>

```go
func IdcsTrimStringValue() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsValidateReference`<sup>Required</sup> <a name="IdcsValidateReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference"></a>

```go
func IdcsValidateReference() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdcsValuePersisted`<sup>Required</sup> <a name="IdcsValuePersisted" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted"></a>

```go
func IdcsValuePersisted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a>

---

##### `MultiValued`<sup>Required</sup> <a name="MultiValued" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued"></a>

```go
func MultiValued() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mutability`<sup>Required</sup> <a name="Mutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability"></a>

```go
func Mutability() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `ReferenceTypes`<sup>Required</sup> <a name="ReferenceTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes"></a>

```go
func ReferenceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Required`<sup>Required</sup> <a name="Required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required"></a>

```go
func Required() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Returned`<sup>Required</sup> <a name="Returned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned"></a>

```go
func Returned() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uniqueness`<sup>Required</sup> <a name="Uniqueness" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness"></a>

```go
func Uniqueness() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainsresourcetypeschemaattributes"

dataociidentitydomainsresourcetypeschemaattributes.NewDataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a>

---



