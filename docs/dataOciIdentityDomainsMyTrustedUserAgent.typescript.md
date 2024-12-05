# `dataOciIdentityDomainsMyTrustedUserAgent` Submodule <a name="`dataOciIdentityDomainsMyTrustedUserAgent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyTrustedUserAgent <a name="DataOciIdentityDomainsMyTrustedUserAgent" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent oci_identity_domains_my_trusted_user_agent}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent(scope: Construct, id: string, config: DataOciIdentityDomainsMyTrustedUserAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig">DataOciIdentityDomainsMyTrustedUserAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig">DataOciIdentityDomainsMyTrustedUserAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyTrustedUserAgent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyTrustedUserAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsMyTrustedUserAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsMyTrustedUserAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyTrustedUserAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.expiryTime">expiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList">DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList">DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.lastUsedOn">lastUsedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList">DataOciIdentityDomainsMyTrustedUserAgentMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList">DataOciIdentityDomainsMyTrustedUserAgentTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.trustedFactors">trustedFactors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList">DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.trustToken">trustToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList">DataOciIdentityDomainsMyTrustedUserAgentUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.myTrustedUserAgentIdInput">myTrustedUserAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.myTrustedUserAgentId">myTrustedUserAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `expiryTime`<sup>Required</sup> <a name="expiryTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.expiryTime"></a>

```typescript
public readonly expiryTime: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList">DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList">DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `lastUsedOn`<sup>Required</sup> <a name="lastUsedOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.lastUsedOn"></a>

```typescript
public readonly lastUsedOn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsMyTrustedUserAgentMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList">DataOciIdentityDomainsMyTrustedUserAgentMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsMyTrustedUserAgentTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList">DataOciIdentityDomainsMyTrustedUserAgentTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `trustedFactors`<sup>Required</sup> <a name="trustedFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.trustedFactors"></a>

```typescript
public readonly trustedFactors: DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList">DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList</a>

---

##### `trustToken`<sup>Required</sup> <a name="trustToken" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.trustToken"></a>

```typescript
public readonly trustToken: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.user"></a>

```typescript
public readonly user: DataOciIdentityDomainsMyTrustedUserAgentUserList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList">DataOciIdentityDomainsMyTrustedUserAgentUserList</a>

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `myTrustedUserAgentIdInput`<sup>Optional</sup> <a name="myTrustedUserAgentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.myTrustedUserAgentIdInput"></a>

```typescript
public readonly myTrustedUserAgentIdInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `myTrustedUserAgentId`<sup>Required</sup> <a name="myTrustedUserAgentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.myTrustedUserAgentId"></a>

```typescript
public readonly myTrustedUserAgentId: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyTrustedUserAgentConfig <a name="DataOciIdentityDomainsMyTrustedUserAgentConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentConfig: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgent#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.myTrustedUserAgentId">myTrustedUserAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#my_trusted_user_agent_id DataOciIdentityDomainsMyTrustedUserAgent#my_trusted_user_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#attributes DataOciIdentityDomainsMyTrustedUserAgent#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#attribute_sets DataOciIdentityDomainsMyTrustedUserAgent#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#authorization DataOciIdentityDomainsMyTrustedUserAgent#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#id DataOciIdentityDomainsMyTrustedUserAgent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgent#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#idcs_endpoint DataOciIdentityDomainsMyTrustedUserAgent#idcs_endpoint}.

---

##### `myTrustedUserAgentId`<sup>Required</sup> <a name="myTrustedUserAgentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.myTrustedUserAgentId"></a>

```typescript
public readonly myTrustedUserAgentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#my_trusted_user_agent_id DataOciIdentityDomainsMyTrustedUserAgent#my_trusted_user_agent_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#attributes DataOciIdentityDomainsMyTrustedUserAgent#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#attribute_sets DataOciIdentityDomainsMyTrustedUserAgent#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#authorization DataOciIdentityDomainsMyTrustedUserAgent#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#id DataOciIdentityDomainsMyTrustedUserAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_trusted_user_agent#resource_type_schema_version DataOciIdentityDomainsMyTrustedUserAgent#resource_type_schema_version}.

---

### DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy <a name="DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentMeta <a name="DataOciIdentityDomainsMyTrustedUserAgentMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentMeta: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMeta = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentTags <a name="DataOciIdentityDomainsMyTrustedUserAgentTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentTags: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTags = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors <a name="DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentTrustedFactors: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors = { ... }
```


### DataOciIdentityDomainsMyTrustedUserAgentUser <a name="DataOciIdentityDomainsMyTrustedUserAgentUser" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUser.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsMyTrustedUserAgentUser: dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUser = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList <a name="DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy">DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy">DataOciIdentityDomainsMyTrustedUserAgentIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy">DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy">DataOciIdentityDomainsMyTrustedUserAgentIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentMetaList <a name="DataOciIdentityDomainsMyTrustedUserAgentMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMeta">DataOciIdentityDomainsMyTrustedUserAgentMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentMeta">DataOciIdentityDomainsMyTrustedUserAgentMeta</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentTagsList <a name="DataOciIdentityDomainsMyTrustedUserAgentTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTags">DataOciIdentityDomainsMyTrustedUserAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTags">DataOciIdentityDomainsMyTrustedUserAgentTags</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList <a name="DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors">DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors">DataOciIdentityDomainsMyTrustedUserAgentTrustedFactors</a>

---


### DataOciIdentityDomainsMyTrustedUserAgentUserList <a name="DataOciIdentityDomainsMyTrustedUserAgentUserList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference <a name="DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsMyTrustedUserAgent } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUser">DataOciIdentityDomainsMyTrustedUserAgentUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsMyTrustedUserAgentUser;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyTrustedUserAgent.DataOciIdentityDomainsMyTrustedUserAgentUser">DataOciIdentityDomainsMyTrustedUserAgentUser</a>

---



