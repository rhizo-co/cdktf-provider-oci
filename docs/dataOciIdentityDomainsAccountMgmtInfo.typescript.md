# `dataOciIdentityDomainsAccountMgmtInfo` Submodule <a name="`dataOciIdentityDomainsAccountMgmtInfo` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountMgmtInfo <a name="DataOciIdentityDomainsAccountMgmtInfo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info oci_identity_domains_account_mgmt_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo(scope: Construct, id: string, config: DataOciIdentityDomainsAccountMgmtInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig">DataOciIdentityDomainsAccountMgmtInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig">DataOciIdentityDomainsAccountMgmtInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsAccountMgmtInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsAccountMgmtInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountMgmtInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.app">app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList">DataOciIdentityDomainsAccountMgmtInfoAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compositeKey">compositeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotBackFillGrants">doNotBackFillGrants</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotPerformActionOnTarget">doNotPerformActionOnTarget</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.favorite">favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.isAccount">isAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lastAccessed">lastAccessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.matchingOwners">matchingOwners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList">DataOciIdentityDomainsAccountMgmtInfoMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.objectClass">objectClass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList">DataOciIdentityDomainsAccountMgmtInfoObjectClassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.operationContext">operationContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.owner">owner</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList">DataOciIdentityDomainsAccountMgmtInfoOwnerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.previewOnly">previewOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceType">resourceType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList">DataOciIdentityDomainsAccountMgmtInfoResourceTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncResponse">syncResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncSituation">syncSituation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncTimestamp">syncTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList">DataOciIdentityDomainsAccountMgmtInfoTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.userWalletArtifact">userWalletArtifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoIdInput">accountMgmtInfoIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoId">accountMgmtInfoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `app`<sup>Required</sup> <a name="app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.app"></a>

```typescript
public readonly app: DataOciIdentityDomainsAccountMgmtInfoAppList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList">DataOciIdentityDomainsAccountMgmtInfoAppList</a>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `compositeKey`<sup>Required</sup> <a name="compositeKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.compositeKey"></a>

```typescript
public readonly compositeKey: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `doNotBackFillGrants`<sup>Required</sup> <a name="doNotBackFillGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotBackFillGrants"></a>

```typescript
public readonly doNotBackFillGrants: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `doNotPerformActionOnTarget`<sup>Required</sup> <a name="doNotPerformActionOnTarget" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.doNotPerformActionOnTarget"></a>

```typescript
public readonly doNotPerformActionOnTarget: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `favorite`<sup>Required</sup> <a name="favorite" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.favorite"></a>

```typescript
public readonly favorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList</a>

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `isAccount`<sup>Required</sup> <a name="isAccount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.isAccount"></a>

```typescript
public readonly isAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastAccessed`<sup>Required</sup> <a name="lastAccessed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.lastAccessed"></a>

```typescript
public readonly lastAccessed: string;
```

- *Type:* string

---

##### `matchingOwners`<sup>Required</sup> <a name="matchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.matchingOwners"></a>

```typescript
public readonly matchingOwners: DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsAccountMgmtInfoMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList">DataOciIdentityDomainsAccountMgmtInfoMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectClass`<sup>Required</sup> <a name="objectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.objectClass"></a>

```typescript
public readonly objectClass: DataOciIdentityDomainsAccountMgmtInfoObjectClassList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList">DataOciIdentityDomainsAccountMgmtInfoObjectClassList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `operationContext`<sup>Required</sup> <a name="operationContext" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.operationContext"></a>

```typescript
public readonly operationContext: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.owner"></a>

```typescript
public readonly owner: DataOciIdentityDomainsAccountMgmtInfoOwnerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList">DataOciIdentityDomainsAccountMgmtInfoOwnerList</a>

---

##### `previewOnly`<sup>Required</sup> <a name="previewOnly" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.previewOnly"></a>

```typescript
public readonly previewOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceType"></a>

```typescript
public readonly resourceType: DataOciIdentityDomainsAccountMgmtInfoResourceTypeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList">DataOciIdentityDomainsAccountMgmtInfoResourceTypeList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `syncResponse`<sup>Required</sup> <a name="syncResponse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncResponse"></a>

```typescript
public readonly syncResponse: string;
```

- *Type:* string

---

##### `syncSituation`<sup>Required</sup> <a name="syncSituation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncSituation"></a>

```typescript
public readonly syncSituation: string;
```

- *Type:* string

---

##### `syncTimestamp`<sup>Required</sup> <a name="syncTimestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.syncTimestamp"></a>

```typescript
public readonly syncTimestamp: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsAccountMgmtInfoTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList">DataOciIdentityDomainsAccountMgmtInfoTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `userWalletArtifact`<sup>Required</sup> <a name="userWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.userWalletArtifact"></a>

```typescript
public readonly userWalletArtifact: DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList</a>

---

##### `accountMgmtInfoIdInput`<sup>Optional</sup> <a name="accountMgmtInfoIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoIdInput"></a>

```typescript
public readonly accountMgmtInfoIdInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `accountMgmtInfoId`<sup>Required</sup> <a name="accountMgmtInfoId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.accountMgmtInfoId"></a>

```typescript
public readonly accountMgmtInfoId: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountMgmtInfoApp <a name="DataOciIdentityDomainsAccountMgmtInfoApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoApp: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoConfig <a name="DataOciIdentityDomainsAccountMgmtInfoConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoConfig: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.accountMgmtInfoId">accountMgmtInfoId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#account_mgmt_info_id DataOciIdentityDomainsAccountMgmtInfo#account_mgmt_info_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfo#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attributes DataOciIdentityDomainsAccountMgmtInfo#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attribute_sets DataOciIdentityDomainsAccountMgmtInfo#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#authorization DataOciIdentityDomainsAccountMgmtInfo#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#id DataOciIdentityDomainsAccountMgmtInfo#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfo#resource_type_schema_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountMgmtInfoId`<sup>Required</sup> <a name="accountMgmtInfoId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.accountMgmtInfoId"></a>

```typescript
public readonly accountMgmtInfoId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#account_mgmt_info_id DataOciIdentityDomainsAccountMgmtInfo#account_mgmt_info_id}.

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfo#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attributes DataOciIdentityDomainsAccountMgmtInfo#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#attribute_sets DataOciIdentityDomainsAccountMgmtInfo#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#authorization DataOciIdentityDomainsAccountMgmtInfo#authorization}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#id DataOciIdentityDomainsAccountMgmtInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_info#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfo#resource_type_schema_version}.

---

### DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoMatchingOwners <a name="DataOciIdentityDomainsAccountMgmtInfoMatchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoMatchingOwners: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoMeta <a name="DataOciIdentityDomainsAccountMgmtInfoMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoMeta: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoObjectClass <a name="DataOciIdentityDomainsAccountMgmtInfoObjectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoObjectClass: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoOwner <a name="DataOciIdentityDomainsAccountMgmtInfoOwner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoOwner: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoResourceType <a name="DataOciIdentityDomainsAccountMgmtInfoResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoResourceType: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoTags <a name="DataOciIdentityDomainsAccountMgmtInfoTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoTags: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact <a name="DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact: dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountMgmtInfoAppList <a name="DataOciIdentityDomainsAccountMgmtInfoAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoAppOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appIcon">appIcon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appThumbnail">appThumbnail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAliasApp">isAliasApp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAuthoritative">isAuthoritative</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isLoginTarget">isLoginTarget</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isManagedApp">isManagedApp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOauthResource">isOauthResource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOpcService">isOpcService</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isUnmanagedApp">isUnmanagedApp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.loginMechanism">loginMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.meterAsOpcService">meterAsOpcService</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.serviceTypeUrn">serviceTypeUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.showInMyApps">showInMyApps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp">DataOciIdentityDomainsAccountMgmtInfoApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appIcon`<sup>Required</sup> <a name="appIcon" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appIcon"></a>

```typescript
public readonly appIcon: string;
```

- *Type:* string

---

##### `appThumbnail`<sup>Required</sup> <a name="appThumbnail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.appThumbnail"></a>

```typescript
public readonly appThumbnail: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `isAliasApp`<sup>Required</sup> <a name="isAliasApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAliasApp"></a>

```typescript
public readonly isAliasApp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isAuthoritative`<sup>Required</sup> <a name="isAuthoritative" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isAuthoritative"></a>

```typescript
public readonly isAuthoritative: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLoginTarget`<sup>Required</sup> <a name="isLoginTarget" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isLoginTarget"></a>

```typescript
public readonly isLoginTarget: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isManagedApp`<sup>Required</sup> <a name="isManagedApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isManagedApp"></a>

```typescript
public readonly isManagedApp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOauthResource`<sup>Required</sup> <a name="isOauthResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOauthResource"></a>

```typescript
public readonly isOauthResource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOpcService`<sup>Required</sup> <a name="isOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isOpcService"></a>

```typescript
public readonly isOpcService: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isUnmanagedApp`<sup>Required</sup> <a name="isUnmanagedApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.isUnmanagedApp"></a>

```typescript
public readonly isUnmanagedApp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `loginMechanism`<sup>Required</sup> <a name="loginMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.loginMechanism"></a>

```typescript
public readonly loginMechanism: string;
```

- *Type:* string

---

##### `meterAsOpcService`<sup>Required</sup> <a name="meterAsOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.meterAsOpcService"></a>

```typescript
public readonly meterAsOpcService: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `serviceTypeUrn`<sup>Required</sup> <a name="serviceTypeUrn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.serviceTypeUrn"></a>

```typescript
public readonly serviceTypeUrn: string;
```

- *Type:* string

---

##### `showInMyApps`<sup>Required</sup> <a name="showInMyApps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.showInMyApps"></a>

```typescript
public readonly showInMyApps: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoApp">DataOciIdentityDomainsAccountMgmtInfoApp</a>

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfoIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList <a name="DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners">DataOciIdentityDomainsAccountMgmtInfoMatchingOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoMatchingOwners;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMatchingOwners">DataOciIdentityDomainsAccountMgmtInfoMatchingOwners</a>

---


### DataOciIdentityDomainsAccountMgmtInfoMetaList <a name="DataOciIdentityDomainsAccountMgmtInfoMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta">DataOciIdentityDomainsAccountMgmtInfoMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoMeta">DataOciIdentityDomainsAccountMgmtInfoMeta</a>

---


### DataOciIdentityDomainsAccountMgmtInfoObjectClassList <a name="DataOciIdentityDomainsAccountMgmtInfoObjectClassList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass">DataOciIdentityDomainsAccountMgmtInfoObjectClass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClassOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoObjectClass;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoObjectClass">DataOciIdentityDomainsAccountMgmtInfoObjectClass</a>

---


### DataOciIdentityDomainsAccountMgmtInfoOwnerList <a name="DataOciIdentityDomainsAccountMgmtInfoOwnerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner">DataOciIdentityDomainsAccountMgmtInfoOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoOwner;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoOwner">DataOciIdentityDomainsAccountMgmtInfoOwner</a>

---


### DataOciIdentityDomainsAccountMgmtInfoResourceTypeList <a name="DataOciIdentityDomainsAccountMgmtInfoResourceTypeList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType">DataOciIdentityDomainsAccountMgmtInfoResourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoResourceType;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoResourceType">DataOciIdentityDomainsAccountMgmtInfoResourceType</a>

---


### DataOciIdentityDomainsAccountMgmtInfoTagsList <a name="DataOciIdentityDomainsAccountMgmtInfoTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags">DataOciIdentityDomainsAccountMgmtInfoTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoTags">DataOciIdentityDomainsAccountMgmtInfoTags</a>

---


### DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList <a name="DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfo } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfo.DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfoUserWalletArtifact</a>

---



