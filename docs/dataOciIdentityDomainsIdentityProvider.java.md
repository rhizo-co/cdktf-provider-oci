# `dataOciIdentityDomainsIdentityProvider` Submodule <a name="`dataOciIdentityDomainsIdentityProvider` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsIdentityProvider <a name="DataOciIdentityDomainsIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider oci_identity_domains_identity_provider}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProvider;

DataOciIdentityDomainsIdentityProvider.Builder.create(Construct scope, java.lang.String id)
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
    .idcsEndpoint(java.lang.String)
    .identityProviderId(java.lang.String)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.identityProviderId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProvider;

DataOciIdentityDomainsIdentityProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProvider;

DataOciIdentityDomainsIdentityProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProvider;

DataOciIdentityDomainsIdentityProvider.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProvider;

DataOciIdentityDomainsIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsIdentityProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.assertionAttribute">assertionAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authnRequestBinding">authnRequestBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.correlationPolicy">correlationPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList">DataOciIdentityDomainsIdentityProviderCorrelationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.encryptionCertificate">encryptionCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsIdentityProviderIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idpSsoUrl">idpSsoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.includeSigningCertInSignature">includeSigningCertInSignature</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups">jitUserProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributes">jitUserProvAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList">DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled">jitUserProvAttributeUpdateEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled">jitUserProvCreateUserEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvEnabled">jitUserProvEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled">jitUserProvGroupAssertionAttributeEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod">jitUserProvGroupAssignmentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode">jitUserProvGroupMappingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappings">jitUserProvGroupMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName">jitUserProvGroupSamlAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled">jitUserProvGroupStaticListEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups">jitUserProvIgnoreErrorOnAbsentGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lastNotificationSentTime">lastNotificationSentTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutBinding">logoutBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutEnabled">logoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutRequestUrl">logoutRequestUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutResponseUrl">logoutResponseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList">DataOciIdentityDomainsIdentityProviderMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.nameIdFormat">nameIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerName">partnerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerProviderId">partnerProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requestedAuthenticationContext">requestedAuthenticationContext</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requireForceAuthn">requireForceAuthn</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requiresEncryptedAssertion">requiresEncryptedAssertion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.samlHoKrequired">samlHoKrequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.serviceInstanceIdentifier">serviceInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.shownOnLoginPage">shownOnLoginPage</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signatureHashAlgorithm">signatureHashAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signingCertificate">signingCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.succinctId">succinctId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList">DataOciIdentityDomainsIdentityProviderTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenantProviderId">tenantProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingMethod">userMappingMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingStoreAttribute">userMappingStoreAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderIdInput">identityProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `assertionAttribute`<sup>Required</sup> <a name="assertionAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.assertionAttribute"></a>

```java
public java.lang.String getAssertionAttribute();
```

- *Type:* java.lang.String

---

##### `authnRequestBinding`<sup>Required</sup> <a name="authnRequestBinding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authnRequestBinding"></a>

```java
public java.lang.String getAuthnRequestBinding();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `correlationPolicy`<sup>Required</sup> <a name="correlationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.correlationPolicy"></a>

```java
public DataOciIdentityDomainsIdentityProviderCorrelationPolicyList getCorrelationPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList">DataOciIdentityDomainsIdentityProviderCorrelationPolicyList</a>

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `encryptionCertificate`<sup>Required</sup> <a name="encryptionCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.encryptionCertificate"></a>

```java
public java.lang.String getEncryptionCertificate();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsIdentityProviderIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList">DataOciIdentityDomainsIdentityProviderIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idpSsoUrl`<sup>Required</sup> <a name="idpSsoUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idpSsoUrl"></a>

```java
public java.lang.String getIdpSsoUrl();
```

- *Type:* java.lang.String

---

##### `includeSigningCertInSignature`<sup>Required</sup> <a name="includeSigningCertInSignature" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.includeSigningCertInSignature"></a>

```java
public IResolvable getIncludeSigningCertInSignature();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvAssignedGroups`<sup>Required</sup> <a name="jitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAssignedGroups"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList getJitUserProvAssignedGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList</a>

---

##### `jitUserProvAttributes`<sup>Required</sup> <a name="jitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributes"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList getJitUserProvAttributes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList">DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList</a>

---

##### `jitUserProvAttributeUpdateEnabled`<sup>Required</sup> <a name="jitUserProvAttributeUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvAttributeUpdateEnabled"></a>

```java
public IResolvable getJitUserProvAttributeUpdateEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvCreateUserEnabled`<sup>Required</sup> <a name="jitUserProvCreateUserEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvCreateUserEnabled"></a>

```java
public IResolvable getJitUserProvCreateUserEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvEnabled`<sup>Required</sup> <a name="jitUserProvEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvEnabled"></a>

```java
public IResolvable getJitUserProvEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvGroupAssertionAttributeEnabled`<sup>Required</sup> <a name="jitUserProvGroupAssertionAttributeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssertionAttributeEnabled"></a>

```java
public IResolvable getJitUserProvGroupAssertionAttributeEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvGroupAssignmentMethod`<sup>Required</sup> <a name="jitUserProvGroupAssignmentMethod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupAssignmentMethod"></a>

```java
public java.lang.String getJitUserProvGroupAssignmentMethod();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupMappingMode`<sup>Required</sup> <a name="jitUserProvGroupMappingMode" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappingMode"></a>

```java
public java.lang.String getJitUserProvGroupMappingMode();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupMappings`<sup>Required</sup> <a name="jitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupMappings"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList getJitUserProvGroupMappings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList</a>

---

##### `jitUserProvGroupSamlAttributeName`<sup>Required</sup> <a name="jitUserProvGroupSamlAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupSamlAttributeName"></a>

```java
public java.lang.String getJitUserProvGroupSamlAttributeName();
```

- *Type:* java.lang.String

---

##### `jitUserProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitUserProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvGroupStaticListEnabled"></a>

```java
public IResolvable getJitUserProvGroupStaticListEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `jitUserProvIgnoreErrorOnAbsentGroups`<sup>Required</sup> <a name="jitUserProvIgnoreErrorOnAbsentGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.jitUserProvIgnoreErrorOnAbsentGroups"></a>

```java
public IResolvable getJitUserProvIgnoreErrorOnAbsentGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastNotificationSentTime`<sup>Required</sup> <a name="lastNotificationSentTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.lastNotificationSentTime"></a>

```java
public java.lang.String getLastNotificationSentTime();
```

- *Type:* java.lang.String

---

##### `logoutBinding`<sup>Required</sup> <a name="logoutBinding" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutBinding"></a>

```java
public java.lang.String getLogoutBinding();
```

- *Type:* java.lang.String

---

##### `logoutEnabled`<sup>Required</sup> <a name="logoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutEnabled"></a>

```java
public IResolvable getLogoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `logoutRequestUrl`<sup>Required</sup> <a name="logoutRequestUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutRequestUrl"></a>

```java
public java.lang.String getLogoutRequestUrl();
```

- *Type:* java.lang.String

---

##### `logoutResponseUrl`<sup>Required</sup> <a name="logoutResponseUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.logoutResponseUrl"></a>

```java
public java.lang.String getLogoutResponseUrl();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.meta"></a>

```java
public DataOciIdentityDomainsIdentityProviderMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList">DataOciIdentityDomainsIdentityProviderMetaList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `nameIdFormat`<sup>Required</sup> <a name="nameIdFormat" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.nameIdFormat"></a>

```java
public java.lang.String getNameIdFormat();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `partnerName`<sup>Required</sup> <a name="partnerName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerName"></a>

```java
public java.lang.String getPartnerName();
```

- *Type:* java.lang.String

---

##### `partnerProviderId`<sup>Required</sup> <a name="partnerProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.partnerProviderId"></a>

```java
public java.lang.String getPartnerProviderId();
```

- *Type:* java.lang.String

---

##### `requestedAuthenticationContext`<sup>Required</sup> <a name="requestedAuthenticationContext" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requestedAuthenticationContext"></a>

```java
public java.util.List<java.lang.String> getRequestedAuthenticationContext();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireForceAuthn`<sup>Required</sup> <a name="requireForceAuthn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requireForceAuthn"></a>

```java
public IResolvable getRequireForceAuthn();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `requiresEncryptedAssertion`<sup>Required</sup> <a name="requiresEncryptedAssertion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.requiresEncryptedAssertion"></a>

```java
public IResolvable getRequiresEncryptedAssertion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `samlHoKrequired`<sup>Required</sup> <a name="samlHoKrequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.samlHoKrequired"></a>

```java
public IResolvable getSamlHoKrequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceInstanceIdentifier`<sup>Required</sup> <a name="serviceInstanceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.serviceInstanceIdentifier"></a>

```java
public java.lang.String getServiceInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `shownOnLoginPage`<sup>Required</sup> <a name="shownOnLoginPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.shownOnLoginPage"></a>

```java
public IResolvable getShownOnLoginPage();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `signatureHashAlgorithm`<sup>Required</sup> <a name="signatureHashAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signatureHashAlgorithm"></a>

```java
public java.lang.String getSignatureHashAlgorithm();
```

- *Type:* java.lang.String

---

##### `signingCertificate`<sup>Required</sup> <a name="signingCertificate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.signingCertificate"></a>

```java
public java.lang.String getSigningCertificate();
```

- *Type:* java.lang.String

---

##### `succinctId`<sup>Required</sup> <a name="succinctId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.succinctId"></a>

```java
public java.lang.String getSuccinctId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tags"></a>

```java
public DataOciIdentityDomainsIdentityProviderTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList">DataOciIdentityDomainsIdentityProviderTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `tenantProviderId`<sup>Required</sup> <a name="tenantProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tenantProviderId"></a>

```java
public java.lang.String getTenantProviderId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList getUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList</a>

---

##### `urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider`<sup>Required</sup> <a name="urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.urnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList getUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList</a>

---

##### `userMappingMethod`<sup>Required</sup> <a name="userMappingMethod" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingMethod"></a>

```java
public java.lang.String getUserMappingMethod();
```

- *Type:* java.lang.String

---

##### `userMappingStoreAttribute`<sup>Required</sup> <a name="userMappingStoreAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.userMappingStoreAttribute"></a>

```java
public java.lang.String getUserMappingStoreAttribute();
```

- *Type:* java.lang.String

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityProviderIdInput`<sup>Optional</sup> <a name="identityProviderIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderIdInput"></a>

```java
public java.lang.String getIdentityProviderIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsIdentityProviderConfig <a name="DataOciIdentityDomainsIdentityProviderConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderConfig;

DataOciIdentityDomainsIdentityProviderConfig.builder()
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
    .idcsEndpoint(java.lang.String)
    .identityProviderId(java.lang.String)
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.identityProviderId">identityProviderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#idcs_endpoint DataOciIdentityDomainsIdentityProvider#idcs_endpoint}.

---

##### `identityProviderId`<sup>Required</sup> <a name="identityProviderId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.identityProviderId"></a>

```java
public java.lang.String getIdentityProviderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#identity_provider_id DataOciIdentityDomainsIdentityProvider#identity_provider_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attributes DataOciIdentityDomainsIdentityProvider#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#attribute_sets DataOciIdentityDomainsIdentityProvider#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#authorization DataOciIdentityDomainsIdentityProvider#authorization}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_identity_provider#resource_type_schema_version DataOciIdentityDomainsIdentityProvider#resource_type_schema_version}.

---

### DataOciIdentityDomainsIdentityProviderCorrelationPolicy <a name="DataOciIdentityDomainsIdentityProviderCorrelationPolicy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy;

DataOciIdentityDomainsIdentityProviderCorrelationPolicy.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderIdcsCreatedBy <a name="DataOciIdentityDomainsIdentityProviderIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy;

DataOciIdentityDomainsIdentityProviderIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy <a name="DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy;

DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups;

DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderJitUserProvAttributes <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes;

DataOciIdentityDomainsIdentityProviderJitUserProvAttributes.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings <a name="DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings;

DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderMeta <a name="DataOciIdentityDomainsIdentityProviderMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderMeta;

DataOciIdentityDomainsIdentityProviderMeta.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderTags <a name="DataOciIdentityDomainsIdentityProviderTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderTags;

DataOciIdentityDomainsIdentityProviderTags.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider;

DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups;

DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups.builder()
    .build();
```


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider;

DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsIdentityProviderCorrelationPolicyList <a name="DataOciIdentityDomainsIdentityProviderCorrelationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList;

new DataOciIdentityDomainsIdentityProviderCorrelationPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference <a name="DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference;

new DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy">DataOciIdentityDomainsIdentityProviderCorrelationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicyOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderCorrelationPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderCorrelationPolicy">DataOciIdentityDomainsIdentityProviderCorrelationPolicy</a>

---


### DataOciIdentityDomainsIdentityProviderIdcsCreatedByList <a name="DataOciIdentityDomainsIdentityProviderIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList;

new DataOciIdentityDomainsIdentityProviderIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference;

new DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsIdentityProviderIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsCreatedBy">DataOciIdentityDomainsIdentityProviderIdcsCreatedBy</a>

---


### DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList <a name="DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList;

new DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy">DataOciIdentityDomainsIdentityProviderIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList;

new DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference;

new DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroupsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups">DataOciIdentityDomainsIdentityProviderJitUserProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList;

new DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference <a name="DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference;

new DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes">DataOciIdentityDomainsIdentityProviderJitUserProvAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributesOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvAttributes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvAttributes">DataOciIdentityDomainsIdentityProviderJitUserProvAttributes</a>

---


### DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList <a name="DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList;

new DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference <a name="DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference;

new DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup">idpGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idpGroup`<sup>Required</sup> <a name="idpGroup" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.idpGroup"></a>

```java
public java.lang.String getIdpGroup();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappingsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings">DataOciIdentityDomainsIdentityProviderJitUserProvGroupMappings</a>

---


### DataOciIdentityDomainsIdentityProviderMetaList <a name="DataOciIdentityDomainsIdentityProviderMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderMetaList;

new DataOciIdentityDomainsIdentityProviderMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderMetaOutputReference <a name="DataOciIdentityDomainsIdentityProviderMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderMetaOutputReference;

new DataOciIdentityDomainsIdentityProviderMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta">DataOciIdentityDomainsIdentityProviderMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderMeta">DataOciIdentityDomainsIdentityProviderMeta</a>

---


### DataOciIdentityDomainsIdentityProviderTagsList <a name="DataOciIdentityDomainsIdentityProviderTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderTagsList;

new DataOciIdentityDomainsIdentityProviderTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderTagsOutputReference <a name="DataOciIdentityDomainsIdentityProviderTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderTagsOutputReference;

new DataOciIdentityDomainsIdentityProviderTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags">DataOciIdentityDomainsIdentityProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderTags">DataOciIdentityDomainsIdentityProviderTags</a>

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList;

new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference;

new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroups</a>

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList;

new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference;

new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl">accessTokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled">accountLinkingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope">adminScope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl">authzUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled">autoRedirectEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload">clientCredentialInPayload</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds">clockSkewInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey">consumerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret">consumerSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute">idAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups">jitProvAssignedGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled">jitProvGroupStaticListEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled">registrationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope">scope</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName">serviceProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled">socialJitProvisioningEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenUrl`<sup>Required</sup> <a name="accessTokenUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accessTokenUrl"></a>

```java
public java.lang.String getAccessTokenUrl();
```

- *Type:* java.lang.String

---

##### `accountLinkingEnabled`<sup>Required</sup> <a name="accountLinkingEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.accountLinkingEnabled"></a>

```java
public IResolvable getAccountLinkingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.adminScope"></a>

```java
public java.util.List<java.lang.String> getAdminScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authzUrl`<sup>Required</sup> <a name="authzUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.authzUrl"></a>

```java
public java.lang.String getAuthzUrl();
```

- *Type:* java.lang.String

---

##### `autoRedirectEnabled`<sup>Required</sup> <a name="autoRedirectEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.autoRedirectEnabled"></a>

```java
public IResolvable getAutoRedirectEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clientCredentialInPayload`<sup>Required</sup> <a name="clientCredentialInPayload" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clientCredentialInPayload"></a>

```java
public IResolvable getClientCredentialInPayload();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `clockSkewInSeconds`<sup>Required</sup> <a name="clockSkewInSeconds" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.clockSkewInSeconds"></a>

```java
public java.lang.Number getClockSkewInSeconds();
```

- *Type:* java.lang.Number

---

##### `consumerKey`<sup>Required</sup> <a name="consumerKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerKey"></a>

```java
public java.lang.String getConsumerKey();
```

- *Type:* java.lang.String

---

##### `consumerSecret`<sup>Required</sup> <a name="consumerSecret" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.consumerSecret"></a>

```java
public java.lang.String getConsumerSecret();
```

- *Type:* java.lang.String

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.discoveryUrl"></a>

```java
public java.lang.String getDiscoveryUrl();
```

- *Type:* java.lang.String

---

##### `idAttribute`<sup>Required</sup> <a name="idAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.idAttribute"></a>

```java
public java.lang.String getIdAttribute();
```

- *Type:* java.lang.String

---

##### `jitProvAssignedGroups`<sup>Required</sup> <a name="jitProvAssignedGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvAssignedGroups"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList getJitProvAssignedGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderJitProvAssignedGroupsList</a>

---

##### `jitProvGroupStaticListEnabled`<sup>Required</sup> <a name="jitProvGroupStaticListEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.jitProvGroupStaticListEnabled"></a>

```java
public IResolvable getJitProvGroupStaticListEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `registrationEnabled`<sup>Required</sup> <a name="registrationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.registrationEnabled"></a>

```java
public IResolvable getRegistrationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.scope"></a>

```java
public java.util.List<java.lang.String> getScope();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceProviderName`<sup>Required</sup> <a name="serviceProviderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.serviceProviderName"></a>

```java
public java.lang.String getServiceProviderName();
```

- *Type:* java.lang.String

---

##### `socialJitProvisioningEnabled`<sup>Required</sup> <a name="socialJitProvisioningEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.socialJitProvisioningEnabled"></a>

```java
public IResolvable getSocialJitProvisioningEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProviderOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionsocialIdentityProvider</a>

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList;

new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference <a name="DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_identity_provider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference;

new DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute">certMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled">crlCheckOnOcspFailureEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled">crlEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation">crlLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration">crlReloadDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled">ekuValidationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues">ekuValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus">ocspAllowUnknownResponseStatus</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled">ocspEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse">ocspEnableSignedResponse</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl">ocspResponderUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime">ocspRevalidateTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName">ocspServerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain">ocspTrustCertChain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute">otherCertMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain">signingCertificateChain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute">userMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certMatchAttribute`<sup>Required</sup> <a name="certMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.certMatchAttribute"></a>

```java
public java.lang.String getCertMatchAttribute();
```

- *Type:* java.lang.String

---

##### `crlCheckOnOcspFailureEnabled`<sup>Required</sup> <a name="crlCheckOnOcspFailureEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlCheckOnOcspFailureEnabled"></a>

```java
public IResolvable getCrlCheckOnOcspFailureEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `crlEnabled`<sup>Required</sup> <a name="crlEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlEnabled"></a>

```java
public IResolvable getCrlEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `crlLocation`<sup>Required</sup> <a name="crlLocation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlLocation"></a>

```java
public java.lang.String getCrlLocation();
```

- *Type:* java.lang.String

---

##### `crlReloadDuration`<sup>Required</sup> <a name="crlReloadDuration" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.crlReloadDuration"></a>

```java
public java.lang.Number getCrlReloadDuration();
```

- *Type:* java.lang.Number

---

##### `ekuValidationEnabled`<sup>Required</sup> <a name="ekuValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValidationEnabled"></a>

```java
public IResolvable getEkuValidationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ekuValues`<sup>Required</sup> <a name="ekuValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ekuValues"></a>

```java
public java.util.List<java.lang.String> getEkuValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocspAllowUnknownResponseStatus`<sup>Required</sup> <a name="ocspAllowUnknownResponseStatus" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspAllowUnknownResponseStatus"></a>

```java
public IResolvable getOcspAllowUnknownResponseStatus();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ocspEnabled`<sup>Required</sup> <a name="ocspEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnabled"></a>

```java
public IResolvable getOcspEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ocspEnableSignedResponse`<sup>Required</sup> <a name="ocspEnableSignedResponse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspEnableSignedResponse"></a>

```java
public IResolvable getOcspEnableSignedResponse();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ocspResponderUrl`<sup>Required</sup> <a name="ocspResponderUrl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspResponderUrl"></a>

```java
public java.lang.String getOcspResponderUrl();
```

- *Type:* java.lang.String

---

##### `ocspRevalidateTime`<sup>Required</sup> <a name="ocspRevalidateTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspRevalidateTime"></a>

```java
public java.lang.Number getOcspRevalidateTime();
```

- *Type:* java.lang.Number

---

##### `ocspServerName`<sup>Required</sup> <a name="ocspServerName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspServerName"></a>

```java
public java.lang.String getOcspServerName();
```

- *Type:* java.lang.String

---

##### `ocspTrustCertChain`<sup>Required</sup> <a name="ocspTrustCertChain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.ocspTrustCertChain"></a>

```java
public java.util.List<java.lang.String> getOcspTrustCertChain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `otherCertMatchAttribute`<sup>Required</sup> <a name="otherCertMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.otherCertMatchAttribute"></a>

```java
public java.lang.String getOtherCertMatchAttribute();
```

- *Type:* java.lang.String

---

##### `signingCertificateChain`<sup>Required</sup> <a name="signingCertificateChain" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.signingCertificateChain"></a>

```java
public java.util.List<java.lang.String> getSigningCertificateChain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userMatchAttribute`<sup>Required</sup> <a name="userMatchAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.userMatchAttribute"></a>

```java
public java.lang.String getUserMatchAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProviderOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsIdentityProvider.DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider">DataOciIdentityDomainsIdentityProviderUrnietfparamsscimschemasoracleidcsextensionx509IdentityProvider</a>

---



