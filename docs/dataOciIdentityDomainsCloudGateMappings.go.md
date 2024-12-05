# `dataOciIdentityDomainsCloudGateMappings` Submodule <a name="`dataOciIdentityDomainsCloudGateMappings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCloudGateMappingsA <a name="DataOciIdentityDomainsCloudGateMappingsA" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings oci_identity_domains_cloud_gate_mappings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsA(scope Construct, id *string, config DataOciIdentityDomainsCloudGateMappingsAConfig) DataOciIdentityDomainsCloudGateMappingsA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig">DataOciIdentityDomainsCloudGateMappingsAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig">DataOciIdentityDomainsCloudGateMappingsAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributeSets">ResetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingCount">ResetCloudGateMappingCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingFilter">ResetCloudGateMappingFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetResourceTypeSchemaVersion">ResetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortOrder">ResetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetStartIndex">ResetStartIndex</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAttributes` <a name="ResetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAttributeSets` <a name="ResetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAttributeSets"></a>

```go
func ResetAttributeSets()
```

##### `ResetAuthorization` <a name="ResetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetCloudGateMappingCount` <a name="ResetCloudGateMappingCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingCount"></a>

```go
func ResetCloudGateMappingCount()
```

##### `ResetCloudGateMappingFilter` <a name="ResetCloudGateMappingFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCloudGateMappingFilter"></a>

```go
func ResetCloudGateMappingFilter()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceTypeSchemaVersion` <a name="ResetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetResourceTypeSchemaVersion"></a>

```go
func ResetResourceTypeSchemaVersion()
```

##### `ResetSortBy` <a name="ResetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortBy"></a>

```go
func ResetSortBy()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetSortOrder"></a>

```go
func ResetSortOrder()
```

##### `ResetStartIndex` <a name="ResetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.resetStartIndex"></a>

```go
func ResetStartIndex()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCloudGateMappingsA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciIdentityDomainsCloudGateMappingsA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciIdentityDomainsCloudGateMappingsA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciIdentityDomainsCloudGateMappingsA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCloudGateMappingsA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappings">CloudGateMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.itemsPerPage">ItemsPerPage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.totalResults">TotalResults</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSetsInput">AttributeSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributesInput">AttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCountInput">CloudGateMappingCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilterInput">CloudGateMappingFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpointInput">IdcsEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersionInput">ResourceTypeSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortByInput">SortByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrderInput">SortOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndexInput">StartIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCount">CloudGateMappingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilter">CloudGateMappingFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortBy">SortBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrder">SortOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndex">StartIndex</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CloudGateMappings`<sup>Required</sup> <a name="CloudGateMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappings"></a>

```go
func CloudGateMappings() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList</a>

---

##### `ItemsPerPage`<sup>Required</sup> <a name="ItemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.itemsPerPage"></a>

```go
func ItemsPerPage() *f64
```

- *Type:* *f64

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `TotalResults`<sup>Required</sup> <a name="TotalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.totalResults"></a>

```go
func TotalResults() *f64
```

- *Type:* *f64

---

##### `AttributeSetsInput`<sup>Optional</sup> <a name="AttributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSetsInput"></a>

```go
func AttributeSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributesInput"></a>

```go
func AttributesInput() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `CloudGateMappingCountInput`<sup>Optional</sup> <a name="CloudGateMappingCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCountInput"></a>

```go
func CloudGateMappingCountInput() *f64
```

- *Type:* *f64

---

##### `CloudGateMappingFilterInput`<sup>Optional</sup> <a name="CloudGateMappingFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilterInput"></a>

```go
func CloudGateMappingFilterInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdcsEndpointInput`<sup>Optional</sup> <a name="IdcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpointInput"></a>

```go
func IdcsEndpointInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="ResourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersionInput"></a>

```go
func ResourceTypeSchemaVersionInput() *string
```

- *Type:* *string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortByInput"></a>

```go
func SortByInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrderInput"></a>

```go
func SortOrderInput() *string
```

- *Type:* *string

---

##### `StartIndexInput`<sup>Optional</sup> <a name="StartIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndexInput"></a>

```go
func StartIndexInput() *f64
```

- *Type:* *f64

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CloudGateMappingCount`<sup>Required</sup> <a name="CloudGateMappingCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingCount"></a>

```go
func CloudGateMappingCount() *f64
```

- *Type:* *f64

---

##### `CloudGateMappingFilter`<sup>Required</sup> <a name="CloudGateMappingFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.cloudGateMappingFilter"></a>

```go
func CloudGateMappingFilter() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortBy"></a>

```go
func SortBy() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.sortOrder"></a>

```go
func SortOrder() *string
```

- *Type:* *string

---

##### `StartIndex`<sup>Required</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.startIndex"></a>

```go
func StartIndex() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCloudGateMappingsAConfig <a name="DataOciIdentityDomainsCloudGateMappingsAConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsAConfig {
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
	CloudGateMappingCount: *f64,
	CloudGateMappingFilter: *string,
	CompartmentId: *string,
	Id: *string,
	ResourceTypeSchemaVersion: *string,
	SortBy: *string,
	SortOrder: *string,
	StartIndex: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#idcs_endpoint DataOciIdentityDomainsCloudGateMappingsA#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributes">Attributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attributes DataOciIdentityDomainsCloudGateMappingsA#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attribute_sets DataOciIdentityDomainsCloudGateMappingsA#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#authorization DataOciIdentityDomainsCloudGateMappingsA#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingCount">CloudGateMappingCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_count DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingFilter">CloudGateMappingFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_filter DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#compartment_id DataOciIdentityDomainsCloudGateMappingsA#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#id DataOciIdentityDomainsCloudGateMappingsA#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#resource_type_schema_version DataOciIdentityDomainsCloudGateMappingsA#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortBy">SortBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_by DataOciIdentityDomainsCloudGateMappingsA#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortOrder">SortOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_order DataOciIdentityDomainsCloudGateMappingsA#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.startIndex">StartIndex</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#start_index DataOciIdentityDomainsCloudGateMappingsA#start_index}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.idcsEndpoint"></a>

```go
IdcsEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#idcs_endpoint DataOciIdentityDomainsCloudGateMappingsA#idcs_endpoint}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributes"></a>

```go
Attributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attributes DataOciIdentityDomainsCloudGateMappingsA#attributes}.

---

##### `AttributeSets`<sup>Optional</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.attributeSets"></a>

```go
AttributeSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#attribute_sets DataOciIdentityDomainsCloudGateMappingsA#attribute_sets}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#authorization DataOciIdentityDomainsCloudGateMappingsA#authorization}.

---

##### `CloudGateMappingCount`<sup>Optional</sup> <a name="CloudGateMappingCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingCount"></a>

```go
CloudGateMappingCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_count DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_count}.

---

##### `CloudGateMappingFilter`<sup>Optional</sup> <a name="CloudGateMappingFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.cloudGateMappingFilter"></a>

```go
CloudGateMappingFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#cloud_gate_mapping_filter DataOciIdentityDomainsCloudGateMappingsA#cloud_gate_mapping_filter}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#compartment_id DataOciIdentityDomainsCloudGateMappingsA#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#id DataOciIdentityDomainsCloudGateMappingsA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceTypeSchemaVersion`<sup>Optional</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.resourceTypeSchemaVersion"></a>

```go
ResourceTypeSchemaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#resource_type_schema_version DataOciIdentityDomainsCloudGateMappingsA#resource_type_schema_version}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortBy"></a>

```go
SortBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_by DataOciIdentityDomainsCloudGateMappingsA#sort_by}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.sortOrder"></a>

```go
SortOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#sort_order DataOciIdentityDomainsCloudGateMappingsA#sort_order}.

---

##### `StartIndex`<sup>Optional</sup> <a name="StartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsAConfig.property.startIndex"></a>

```go
StartIndex *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gate_mappings#start_index DataOciIdentityDomainsCloudGateMappingsA#start_index}.

---

### DataOciIdentityDomainsCloudGateMappingsCloudGateMappings <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags {

}
```


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

&dataociidentitydomainscloudgatemappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGate</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayApp</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMeta</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributeSets">AttributeSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.cloudGate">CloudGate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.compartmentOcid">CompartmentOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.deleteInProgress">DeleteInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.domainOcid">DomainOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.gatewayApp">GatewayApp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsCreatedBy">IdcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsEndpoint">IdcsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastModifiedBy">IdcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastUpgradedInRelease">IdcsLastUpgradedInRelease</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsPreventedOperations">IdcsPreventedOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.isOpcService">IsOpcService</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.meta">Meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.nginxSettings">NginxSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.proxyPass">ProxyPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourcePrefix">ResourcePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourceTypeSchemaVersion">ResourceTypeSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.schemas">Schemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.server">Server</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tags">Tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tenancyOcid">TenancyOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.upstreamServerGroup">UpstreamServerGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings">DataOciIdentityDomainsCloudGateMappingsCloudGateMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AttributeSets`<sup>Required</sup> <a name="AttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.attributeSets"></a>

```go
func AttributeSets() *[]*string
```

- *Type:* *[]*string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `CloudGate`<sup>Required</sup> <a name="CloudGate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.cloudGate"></a>

```go
func CloudGate() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsCloudGateList</a>

---

##### `CompartmentOcid`<sup>Required</sup> <a name="CompartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.compartmentOcid"></a>

```go
func CompartmentOcid() *string
```

- *Type:* *string

---

##### `DeleteInProgress`<sup>Required</sup> <a name="DeleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.deleteInProgress"></a>

```go
func DeleteInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainOcid`<sup>Required</sup> <a name="DomainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.domainOcid"></a>

```go
func DomainOcid() *string
```

- *Type:* *string

---

##### `GatewayApp`<sup>Required</sup> <a name="GatewayApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.gatewayApp"></a>

```go
func GatewayApp() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsGatewayAppList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsCreatedBy`<sup>Required</sup> <a name="IdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsCreatedBy"></a>

```go
func IdcsCreatedBy() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsCreatedByList</a>

---

##### `IdcsEndpoint`<sup>Required</sup> <a name="IdcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsEndpoint"></a>

```go
func IdcsEndpoint() *string
```

- *Type:* *string

---

##### `IdcsLastModifiedBy`<sup>Required</sup> <a name="IdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastModifiedBy"></a>

```go
func IdcsLastModifiedBy() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsIdcsLastModifiedByList</a>

---

##### `IdcsLastUpgradedInRelease`<sup>Required</sup> <a name="IdcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```go
func IdcsLastUpgradedInRelease() *string
```

- *Type:* *string

---

##### `IdcsPreventedOperations`<sup>Required</sup> <a name="IdcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.idcsPreventedOperations"></a>

```go
func IdcsPreventedOperations() *[]*string
```

- *Type:* *[]*string

---

##### `IsOpcService`<sup>Required</sup> <a name="IsOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.isOpcService"></a>

```go
func IsOpcService() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.meta"></a>

```go
func Meta() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsMetaList</a>

---

##### `NginxSettings`<sup>Required</sup> <a name="NginxSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.nginxSettings"></a>

```go
func NginxSettings() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `ProxyPass`<sup>Required</sup> <a name="ProxyPass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.proxyPass"></a>

```go
func ProxyPass() *string
```

- *Type:* *string

---

##### `ResourcePrefix`<sup>Required</sup> <a name="ResourcePrefix" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourcePrefix"></a>

```go
func ResourcePrefix() *string
```

- *Type:* *string

---

##### `ResourceTypeSchemaVersion`<sup>Required</sup> <a name="ResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.resourceTypeSchemaVersion"></a>

```go
func ResourceTypeSchemaVersion() *string
```

- *Type:* *string

---

##### `Schemas`<sup>Required</sup> <a name="Schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.schemas"></a>

```go
func Schemas() *[]*string
```

- *Type:* *[]*string

---

##### `Server`<sup>Required</sup> <a name="Server" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.server"></a>

```go
func Server() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tags"></a>

```go
func Tags() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList</a>

---

##### `TenancyOcid`<sup>Required</sup> <a name="TenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.tenancyOcid"></a>

```go
func TenancyOcid() *string
```

- *Type:* *string

---

##### `UpstreamServerGroup`<sup>Required</sup> <a name="UpstreamServerGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.upstreamServerGroup"></a>

```go
func UpstreamServerGroup() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappings">DataOciIdentityDomainsCloudGateMappingsCloudGateMappings</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsServer</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsTags</a>

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.get"></a>

```go
func Get(index *f64) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference <a name="DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociidentitydomainscloudgatemappings"

dataociidentitydomainscloudgatemappings.NewDataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ref">Ref</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ssl">Ssl</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ref"></a>

```go
func Ref() *string
```

- *Type:* *string

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.ssl"></a>

```go
func Ssl() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGateMappings.DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup">DataOciIdentityDomainsCloudGateMappingsCloudGateMappingsUpstreamServerGroup</a>

---



