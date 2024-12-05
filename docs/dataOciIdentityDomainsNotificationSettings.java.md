# `dataOciIdentityDomainsNotificationSettings` Submodule <a name="`dataOciIdentityDomainsNotificationSettings` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsNotificationSettings <a name="DataOciIdentityDomainsNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings oci_identity_domains_notification_settings}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettings;

DataOciIdentityDomainsNotificationSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#idcs_endpoint DataOciIdentityDomainsNotificationSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attributes DataOciIdentityDomainsNotificationSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attribute_sets DataOciIdentityDomainsNotificationSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#authorization DataOciIdentityDomainsNotificationSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#compartment_id DataOciIdentityDomainsNotificationSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#id DataOciIdentityDomainsNotificationSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#resource_type_schema_version DataOciIdentityDomainsNotificationSettings#resource_type_schema_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.idcsEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#idcs_endpoint DataOciIdentityDomainsNotificationSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.attributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attributes DataOciIdentityDomainsNotificationSettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.attributeSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attribute_sets DataOciIdentityDomainsNotificationSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.authorization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#authorization DataOciIdentityDomainsNotificationSettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#compartment_id DataOciIdentityDomainsNotificationSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#id DataOciIdentityDomainsNotificationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#resource_type_schema_version DataOciIdentityDomainsNotificationSettings#resource_type_schema_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAttributeSets"></a>

```java
public void resetAttributeSets()
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetId"></a>

```java
public void resetId()
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.resetResourceTypeSchemaVersion"></a>

```java
public void resetResourceTypeSchemaVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsNotificationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettings;

DataOciIdentityDomainsNotificationSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettings;

DataOciIdentityDomainsNotificationSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettings;

DataOciIdentityDomainsNotificationSettings.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettings;

DataOciIdentityDomainsNotificationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciIdentityDomainsNotificationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsNotificationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciIdentityDomainsNotificationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciIdentityDomainsNotificationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsNotificationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.itemsPerPage">itemsPerPage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.notificationSettings">notificationSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.startIndex">startIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.totalResults">totalResults</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSetsInput">attributeSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributesInput">attributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.itemsPerPage"></a>

```java
public java.lang.Number getItemsPerPage();
```

- *Type:* java.lang.Number

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.notificationSettings"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsList getNotificationSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.startIndex"></a>

```java
public java.lang.Number getStartIndex();
```

- *Type:* java.lang.Number

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.totalResults"></a>

```java
public java.lang.Number getTotalResults();
```

- *Type:* java.lang.Number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSetsInput"></a>

```java
public java.util.List<java.lang.String> getAttributeSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributesInput"></a>

```java
public java.lang.String getAttributesInput();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpointInput"></a>

```java
public java.lang.String getIdcsEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersionInput"></a>

```java
public java.lang.String getResourceTypeSchemaVersionInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsNotificationSettingsConfig <a name="DataOciIdentityDomainsNotificationSettingsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsConfig;

DataOciIdentityDomainsNotificationSettingsConfig.builder()
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
//  .attributes(java.lang.String)
//  .attributeSets(java.util.List<java.lang.String>)
//  .authorization(java.lang.String)
//  .compartmentId(java.lang.String)
//  .id(java.lang.String)
//  .resourceTypeSchemaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#idcs_endpoint DataOciIdentityDomainsNotificationSettings#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributes">attributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attributes DataOciIdentityDomainsNotificationSettings#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attribute_sets DataOciIdentityDomainsNotificationSettings#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#authorization DataOciIdentityDomainsNotificationSettings#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#compartment_id DataOciIdentityDomainsNotificationSettings#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#id DataOciIdentityDomainsNotificationSettings#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#resource_type_schema_version DataOciIdentityDomainsNotificationSettings#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#idcs_endpoint DataOciIdentityDomainsNotificationSettings#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attributes DataOciIdentityDomainsNotificationSettings#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#attribute_sets DataOciIdentityDomainsNotificationSettings#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#authorization DataOciIdentityDomainsNotificationSettings#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#compartment_id DataOciIdentityDomainsNotificationSettings#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#id DataOciIdentityDomainsNotificationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsConfig.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_notification_settings#resource_type_schema_version DataOciIdentityDomainsNotificationSettings#resource_type_schema_version}.

---

### DataOciIdentityDomainsNotificationSettingsNotificationSettings <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettings;

DataOciIdentityDomainsNotificationSettingsNotificationSettings.builder()
    .build();
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings;

DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings.builder()
    .build();
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress;

DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress.builder()
    .build();
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy;

DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy.builder()
    .build();
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy;

DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy.builder()
    .build();
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta;

DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta.builder()
    .build();
```


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags;

DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.eventId">eventId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.eventId"></a>

```java
public java.lang.String getEventId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettings</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validate">validate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validationStatus">validationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `validate`<sup>Required</sup> <a name="validate" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validate"></a>

```java
public java.lang.String getValidate();
```

- *Type:* java.lang.String

---

##### `validationStatus`<sup>Required</sup> <a name="validationStatus" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.validationStatus"></a>

```java
public java.lang.String getValidationStatus();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddress</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.display"></a>

```java
public java.lang.String getDisplay();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMeta</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributeSets">attributeSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.domainOcid">domainOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.eventSettings">eventSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fromEmailAddress">fromEmailAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationEnabled">notificationEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationSettingId">notificationSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.schemas">schemas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationsToSecondaryEmail">sendNotificationsToSecondaryEmail</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail">sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testModeEnabled">testModeEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testRecipients">testRecipients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.attributeSets"></a>

```java
public java.util.List<java.lang.String> getAttributeSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.deleteInProgress"></a>

```java
public IResolvable getDeleteInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.domainOcid"></a>

```java
public java.lang.String getDomainOcid();
```

- *Type:* java.lang.String

---

##### `eventSettings`<sup>Required</sup> <a name="eventSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.eventSettings"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList getEventSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsEventSettingsList</a>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.fromEmailAddress"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList getFromEmailAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsFromEmailAddressList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsCreatedBy"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList getIdcsCreatedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsEndpoint"></a>

```java
public java.lang.String getIdcsEndpoint();
```

- *Type:* java.lang.String

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastModifiedBy"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList getIdcsLastModifiedBy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsLastUpgradedInRelease"></a>

```java
public java.lang.String getIdcsLastUpgradedInRelease();
```

- *Type:* java.lang.String

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.idcsPreventedOperations"></a>

```java
public java.util.List<java.lang.String> getIdcsPreventedOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.meta"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList getMeta();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsMetaList</a>

---

##### `notificationEnabled`<sup>Required</sup> <a name="notificationEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationEnabled"></a>

```java
public IResolvable getNotificationEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `notificationSettingId`<sup>Required</sup> <a name="notificationSettingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.notificationSettingId"></a>

```java
public java.lang.String getNotificationSettingId();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.resourceTypeSchemaVersion"></a>

```java
public java.lang.String getResourceTypeSchemaVersion();
```

- *Type:* java.lang.String

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.schemas"></a>

```java
public java.util.List<java.lang.String> getSchemas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sendNotificationsToSecondaryEmail`<sup>Required</sup> <a name="sendNotificationsToSecondaryEmail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationsToSecondaryEmail"></a>

```java
public IResolvable getSendNotificationsToSecondaryEmail();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail`<sup>Required</sup> <a name="sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.sendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail"></a>

```java
public IResolvable getSendNotificationToOldAndNewPrimaryEmailsWhenAdminChangesPrimaryEmail();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tags"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `testModeEnabled`<sup>Required</sup> <a name="testModeEnabled" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testModeEnabled"></a>

```java
public IResolvable getTestModeEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `testRecipients`<sup>Required</sup> <a name="testRecipients" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.testRecipients"></a>

```java
public java.util.List<java.lang.String> getTestRecipients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettings">DataOciIdentityDomainsNotificationSettingsNotificationSettings</a>

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.get"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference <a name="DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_identity_domains_notification_settings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference;

new DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTagsOutputReference.property.internalValue"></a>

```java
public DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNotificationSettings.DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags">DataOciIdentityDomainsNotificationSettingsNotificationSettingsTags</a>

---



