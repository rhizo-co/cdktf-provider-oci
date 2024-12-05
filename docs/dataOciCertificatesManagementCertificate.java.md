# `dataOciCertificatesManagementCertificate` Submodule <a name="`dataOciCertificatesManagementCertificate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCertificatesManagementCertificate <a name="DataOciCertificatesManagementCertificate" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate oci_certificates_management_certificate}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificate;

DataOciCertificatesManagementCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .certificateId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate#certificate_id DataOciCertificatesManagementCertificate#certificate_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate#certificate_id DataOciCertificatesManagementCertificate#certificate_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCertificatesManagementCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificate;

DataOciCertificatesManagementCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificate;

DataOciCertificatesManagementCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificate;

DataOciCertificatesManagementCertificate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificate;

DataOciCertificatesManagementCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCertificatesManagementCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCertificatesManagementCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCertificatesManagementCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCertificatesManagementCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCertificatesManagementCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateConfig">certificateConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList">DataOciCertificatesManagementCertificateCertificateConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateProfileType">certificateProfileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateRevocationListDetails">certificateRevocationListDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateRules">certificateRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList">DataOciCertificatesManagementCertificateCertificateRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.currentVersion">currentVersion</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList">DataOciCertificatesManagementCertificateCurrentVersionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList">DataOciCertificatesManagementCertificateSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `certificateConfig`<sup>Required</sup> <a name="certificateConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateConfig"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigList getCertificateConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList">DataOciCertificatesManagementCertificateCertificateConfigList</a>

---

##### `certificateProfileType`<sup>Required</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateProfileType"></a>

```java
public java.lang.String getCertificateProfileType();
```

- *Type:* java.lang.String

---

##### `certificateRevocationListDetails`<sup>Required</sup> <a name="certificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateRevocationListDetails"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList getCertificateRevocationListDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList">DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList</a>

---

##### `certificateRules`<sup>Required</sup> <a name="certificateRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateRules"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRulesList getCertificateRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList">DataOciCertificatesManagementCertificateCertificateRulesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.currentVersion"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionList getCurrentVersion();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList">DataOciCertificatesManagementCertificateCurrentVersionList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.issuerCertificateAuthorityId"></a>

```java
public java.lang.String getIssuerCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.subject"></a>

```java
public DataOciCertificatesManagementCertificateSubjectList getSubject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList">DataOciCertificatesManagementCertificateSubjectList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCertificatesManagementCertificateCertificateConfig <a name="DataOciCertificatesManagementCertificateCertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfig;

DataOciCertificatesManagementCertificateCertificateConfig.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCertificateConfigSubject <a name="DataOciCertificatesManagementCertificateCertificateConfigSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigSubject;

DataOciCertificatesManagementCertificateCertificateConfigSubject.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames;

DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCertificateConfigValidity <a name="DataOciCertificatesManagementCertificateCertificateConfigValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigValidity;

DataOciCertificatesManagementCertificateCertificateConfigValidity.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCertificateRevocationListDetails <a name="DataOciCertificatesManagementCertificateCertificateRevocationListDetails" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetails;

DataOciCertificatesManagementCertificateCertificateRevocationListDetails.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig <a name="DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig;

DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCertificateRules <a name="DataOciCertificatesManagementCertificateCertificateRules" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRules;

DataOciCertificatesManagementCertificateCertificateRules.builder()
    .build();
```


### DataOciCertificatesManagementCertificateConfig <a name="DataOciCertificatesManagementCertificateConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateConfig;

DataOciCertificatesManagementCertificateConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .certificateId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate#certificate_id DataOciCertificatesManagementCertificate#certificate_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_certificate#certificate_id DataOciCertificatesManagementCertificate#certificate_id}.

---

### DataOciCertificatesManagementCertificateCurrentVersion <a name="DataOciCertificatesManagementCertificateCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersion"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersion;

DataOciCertificatesManagementCertificateCurrentVersion.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus <a name="DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus;

DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames <a name="DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames;

DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames.builder()
    .build();
```


### DataOciCertificatesManagementCertificateCurrentVersionValidity <a name="DataOciCertificatesManagementCertificateCurrentVersionValidity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionValidity;

DataOciCertificatesManagementCertificateCurrentVersionValidity.builder()
    .build();
```


### DataOciCertificatesManagementCertificateSubject <a name="DataOciCertificatesManagementCertificateSubject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubject"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateSubject;

DataOciCertificatesManagementCertificateSubject.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCertificatesManagementCertificateCertificateConfigList <a name="DataOciCertificatesManagementCertificateCertificateConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigList;

new DataOciCertificatesManagementCertificateCertificateConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateConfigOutputReference <a name="DataOciCertificatesManagementCertificateCertificateConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference;

new DataOciCertificatesManagementCertificateCertificateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType">certificateProfileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.configType">configType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem">csrPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId">issuerCertificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.subject">subject</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList">DataOciCertificatesManagementCertificateCertificateConfigSubjectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList">DataOciCertificatesManagementCertificateCertificateConfigValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfig">DataOciCertificatesManagementCertificateCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateProfileType`<sup>Required</sup> <a name="certificateProfileType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.certificateProfileType"></a>

```java
public java.lang.String getCertificateProfileType();
```

- *Type:* java.lang.String

---

##### `configType`<sup>Required</sup> <a name="configType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.configType"></a>

```java
public java.lang.String getConfigType();
```

- *Type:* java.lang.String

---

##### `csrPem`<sup>Required</sup> <a name="csrPem" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.csrPem"></a>

```java
public java.lang.String getCsrPem();
```

- *Type:* java.lang.String

---

##### `issuerCertificateAuthorityId`<sup>Required</sup> <a name="issuerCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.issuerCertificateAuthorityId"></a>

```java
public java.lang.String getIssuerCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.subject"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigSubjectList getSubject();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList">DataOciCertificatesManagementCertificateCertificateConfigSubjectList</a>

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.subjectAlternativeNames"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList getSubjectAlternativeNames();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.validity"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigValidityList getValidity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList">DataOciCertificatesManagementCertificateCertificateConfigValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfig">DataOciCertificatesManagementCertificateCertificateConfig</a>

---


### DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList;

new DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference;

new DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames">DataOciCertificatesManagementCertificateCertificateConfigSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateCertificateConfigSubjectList <a name="DataOciCertificatesManagementCertificateCertificateConfigSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList;

new DataOciCertificatesManagementCertificateCertificateConfigSubjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference <a name="DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference;

new DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName">localityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street">street</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubject">DataOciCertificatesManagementCertificateCertificateConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.domainComponent"></a>

```java
public java.lang.String getDomainComponent();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.localityName"></a>

```java
public java.lang.String getLocalityName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.stateOrProvinceName"></a>

```java
public java.lang.String getStateOrProvinceName();
```

- *Type:* java.lang.String

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubjectOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigSubject getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigSubject">DataOciCertificatesManagementCertificateCertificateConfigSubject</a>

---


### DataOciCertificatesManagementCertificateCertificateConfigValidityList <a name="DataOciCertificatesManagementCertificateCertificateConfigValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList;

new DataOciCertificatesManagementCertificateCertificateConfigValidityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference <a name="DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference;

new DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidity">DataOciCertificatesManagementCertificateCertificateConfigValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotAfter"></a>

```java
public java.lang.String getTimeOfValidityNotAfter();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.timeOfValidityNotBefore"></a>

```java
public java.lang.String getTimeOfValidityNotBefore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidityOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateConfigValidity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateConfigValidity">DataOciCertificatesManagementCertificateCertificateConfigValidity</a>

---


### DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList <a name="DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList;

new DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList <a name="DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList;

new DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference <a name="DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference;

new DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName">objectStorageBucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace">objectStorageNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat">objectStorageObjectNameFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectStorageBucketName`<sup>Required</sup> <a name="objectStorageBucketName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageBucketName"></a>

```java
public java.lang.String getObjectStorageBucketName();
```

- *Type:* java.lang.String

---

##### `objectStorageNamespace`<sup>Required</sup> <a name="objectStorageNamespace" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageNamespace"></a>

```java
public java.lang.String getObjectStorageNamespace();
```

- *Type:* java.lang.String

---

##### `objectStorageObjectNameFormat`<sup>Required</sup> <a name="objectStorageObjectNameFormat" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.objectStorageObjectNameFormat"></a>

```java
public java.lang.String getObjectStorageObjectNameFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig">DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfig</a>

---


### DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference <a name="DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference;

new DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls">customFormattedUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig">objectStorageConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetails">DataOciCertificatesManagementCertificateCertificateRevocationListDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customFormattedUrls`<sup>Required</sup> <a name="customFormattedUrls" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.customFormattedUrls"></a>

```java
public java.util.List<java.lang.String> getCustomFormattedUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectStorageConfig`<sup>Required</sup> <a name="objectStorageConfig" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.objectStorageConfig"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList getObjectStorageConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList">DataOciCertificatesManagementCertificateCertificateRevocationListDetailsObjectStorageConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRevocationListDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRevocationListDetails">DataOciCertificatesManagementCertificateCertificateRevocationListDetails</a>

---


### DataOciCertificatesManagementCertificateCertificateRulesList <a name="DataOciCertificatesManagementCertificateCertificateRulesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRulesList;

new DataOciCertificatesManagementCertificateCertificateRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.get"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCertificateRulesOutputReference <a name="DataOciCertificatesManagementCertificateCertificateRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference;

new DataOciCertificatesManagementCertificateCertificateRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod">advanceRenewalPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval">renewalInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRules">DataOciCertificatesManagementCertificateCertificateRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advanceRenewalPeriod`<sup>Required</sup> <a name="advanceRenewalPeriod" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.advanceRenewalPeriod"></a>

```java
public java.lang.String getAdvanceRenewalPeriod();
```

- *Type:* java.lang.String

---

##### `renewalInterval`<sup>Required</sup> <a name="renewalInterval" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.renewalInterval"></a>

```java
public java.lang.String getRenewalInterval();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRulesOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCertificateRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCertificateRules">DataOciCertificatesManagementCertificateCertificateRules</a>

---


### DataOciCertificatesManagementCertificateCurrentVersionList <a name="DataOciCertificatesManagementCertificateCurrentVersionList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionList;

new DataOciCertificatesManagementCertificateCurrentVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.get"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCurrentVersionOutputReference <a name="DataOciCertificatesManagementCertificateCurrentVersionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference;

new DataOciCertificatesManagementCertificateCurrentVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber">issuerCaVersionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus">revocationStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.stages">stages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.validity">validity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList">DataOciCertificatesManagementCertificateCurrentVersionValidityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersion">DataOciCertificatesManagementCertificateCurrentVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `issuerCaVersionNumber`<sup>Required</sup> <a name="issuerCaVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.issuerCaVersionNumber"></a>

```java
public java.lang.String getIssuerCaVersionNumber();
```

- *Type:* java.lang.String

---

##### `revocationStatus`<sup>Required</sup> <a name="revocationStatus" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.revocationStatus"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList getRevocationStatus();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList">DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList</a>

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.stages"></a>

```java
public java.util.List<java.lang.String> getStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.subjectAlternativeNames"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList getSubjectAlternativeNames();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList">DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `validity`<sup>Required</sup> <a name="validity" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.validity"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionValidityList getValidity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList">DataOciCertificatesManagementCertificateCurrentVersionValidityList</a>

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersion getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersion">DataOciCertificatesManagementCertificateCurrentVersion</a>

---


### DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList <a name="DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList;

new DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.get"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference <a name="DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference;

new DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason">revocationReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation">timeOfRevocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `revocationReason`<sup>Required</sup> <a name="revocationReason" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.revocationReason"></a>

```java
public java.lang.String getRevocationReason();
```

- *Type:* java.lang.String

---

##### `timeOfRevocation`<sup>Required</sup> <a name="timeOfRevocation" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.timeOfRevocation"></a>

```java
public java.lang.String getTimeOfRevocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatusOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus">DataOciCertificatesManagementCertificateCurrentVersionRevocationStatus</a>

---


### DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList <a name="DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList;

new DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference <a name="DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference;

new DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNamesOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames">DataOciCertificatesManagementCertificateCurrentVersionSubjectAlternativeNames</a>

---


### DataOciCertificatesManagementCertificateCurrentVersionValidityList <a name="DataOciCertificatesManagementCertificateCurrentVersionValidityList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList;

new DataOciCertificatesManagementCertificateCurrentVersionValidityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.get"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference <a name="DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference;

new DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter">timeOfValidityNotAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore">timeOfValidityNotBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidity">DataOciCertificatesManagementCertificateCurrentVersionValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotAfter`<sup>Required</sup> <a name="timeOfValidityNotAfter" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotAfter"></a>

```java
public java.lang.String getTimeOfValidityNotAfter();
```

- *Type:* java.lang.String

---

##### `timeOfValidityNotBefore`<sup>Required</sup> <a name="timeOfValidityNotBefore" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.timeOfValidityNotBefore"></a>

```java
public java.lang.String getTimeOfValidityNotBefore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidityOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateCurrentVersionValidity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateCurrentVersionValidity">DataOciCertificatesManagementCertificateCurrentVersionValidity</a>

---


### DataOciCertificatesManagementCertificateSubjectList <a name="DataOciCertificatesManagementCertificateSubjectList" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateSubjectList;

new DataOciCertificatesManagementCertificateSubjectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.get"></a>

```java
public DataOciCertificatesManagementCertificateSubjectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCertificatesManagementCertificateSubjectOutputReference <a name="DataOciCertificatesManagementCertificateSubjectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_certificates_management_certificate.DataOciCertificatesManagementCertificateSubjectOutputReference;

new DataOciCertificatesManagementCertificateSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier">distinguishedNameQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.domainComponent">domainComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.generationQualifier">generationQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.localityName">localityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.pseudonym">pseudonym</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName">stateOrProvinceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.street">street</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubject">DataOciCertificatesManagementCertificateSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `distinguishedNameQualifier`<sup>Required</sup> <a name="distinguishedNameQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.distinguishedNameQualifier"></a>

```java
public java.lang.String getDistinguishedNameQualifier();
```

- *Type:* java.lang.String

---

##### `domainComponent`<sup>Required</sup> <a name="domainComponent" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.domainComponent"></a>

```java
public java.lang.String getDomainComponent();
```

- *Type:* java.lang.String

---

##### `generationQualifier`<sup>Required</sup> <a name="generationQualifier" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.generationQualifier"></a>

```java
public java.lang.String getGenerationQualifier();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `localityName`<sup>Required</sup> <a name="localityName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.localityName"></a>

```java
public java.lang.String getLocalityName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `pseudonym`<sup>Required</sup> <a name="pseudonym" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.pseudonym"></a>

```java
public java.lang.String getPseudonym();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `stateOrProvinceName`<sup>Required</sup> <a name="stateOrProvinceName" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.stateOrProvinceName"></a>

```java
public java.lang.String getStateOrProvinceName();
```

- *Type:* java.lang.String

---

##### `street`<sup>Required</sup> <a name="street" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.street"></a>

```java
public java.lang.String getStreet();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubjectOutputReference.property.internalValue"></a>

```java
public DataOciCertificatesManagementCertificateSubject getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCertificatesManagementCertificate.DataOciCertificatesManagementCertificateSubject">DataOciCertificatesManagementCertificateSubject</a>

---


