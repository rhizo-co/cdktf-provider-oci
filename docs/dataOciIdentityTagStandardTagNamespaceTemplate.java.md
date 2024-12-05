# `dataOciIdentityTagStandardTagNamespaceTemplate` Submodule <a name="`dataOciIdentityTagStandardTagNamespaceTemplate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplate <a name="DataOciIdentityTagStandardTagNamespaceTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template oci_identity_tag_standard_tag_namespace_template}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplate;

DataOciIdentityTagStandardTagNamespaceTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .standardTagNamespaceName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.standardTagNamespaceName">standardTagNamespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}.

---

##### `standardTagNamespaceName`<sup>Required</sup> <a name="standardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.standardTagNamespaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplate;

DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplate;

DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplate;

DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplate;

DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityTagStandardTagNamespaceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityTagStandardTagNamespaceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityTagStandardTagNamespaceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tagDefinitionTemplates">tagDefinitionTemplates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceNameInput">standardTagNamespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceName">standardTagNamespaceName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagDefinitionTemplates`<sup>Required</sup> <a name="tagDefinitionTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tagDefinitionTemplates"></a>

```java
public DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList getTagDefinitionTemplates();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `standardTagNamespaceNameInput`<sup>Optional</sup> <a name="standardTagNamespaceNameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceNameInput"></a>

```java
public java.lang.String getStandardTagNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `standardTagNamespaceName`<sup>Required</sup> <a name="standardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceName"></a>

```java
public java.lang.String getStandardTagNamespaceName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplateConfig <a name="DataOciIdentityTagStandardTagNamespaceTemplateConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplateConfig;

DataOciIdentityTagStandardTagNamespaceTemplateConfig.builder()
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
    .compartmentId(java.lang.String)
    .standardTagNamespaceName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.standardTagNamespaceName">standardTagNamespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}.

---

##### `standardTagNamespaceName`<sup>Required</sup> <a name="standardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.standardTagNamespaceName"></a>

```java
public java.lang.String getStandardTagNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates;

DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList;

new DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get"></a>

```java
public DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_tag_standard_tag_namespace_template.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference;

new DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.enumMutability">enumMutability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.isCostTracking">isCostTracking</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.tagDefinitionName">tagDefinitionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enumMutability`<sup>Required</sup> <a name="enumMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.enumMutability"></a>

```java
public java.lang.String getEnumMutability();
```

- *Type:* java.lang.String

---

##### `isCostTracking`<sup>Required</sup> <a name="isCostTracking" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.isCostTracking"></a>

```java
public IResolvable getIsCostTracking();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagDefinitionName`<sup>Required</sup> <a name="tagDefinitionName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.tagDefinitionName"></a>

```java
public java.lang.String getTagDefinitionName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.internalValue"></a>

```java
public DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates</a>

---



