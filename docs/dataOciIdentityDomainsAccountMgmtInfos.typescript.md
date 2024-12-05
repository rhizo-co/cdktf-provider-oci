# `dataOciIdentityDomainsAccountMgmtInfos` Submodule <a name="`dataOciIdentityDomainsAccountMgmtInfos` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsAccountMgmtInfos <a name="DataOciIdentityDomainsAccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos oci_identity_domains_account_mgmt_infos}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos(scope: Construct, id: string, config: DataOciIdentityDomainsAccountMgmtInfosConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig">DataOciIdentityDomainsAccountMgmtInfosConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig">DataOciIdentityDomainsAccountMgmtInfosConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoCount">resetAccountMgmtInfoCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoFilter">resetAccountMgmtInfoFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountMgmtInfoCount` <a name="resetAccountMgmtInfoCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoCount"></a>

```typescript
public resetAccountMgmtInfoCount(): void
```

##### `resetAccountMgmtInfoFilter` <a name="resetAccountMgmtInfoFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAccountMgmtInfoFilter"></a>

```typescript
public resetAccountMgmtInfoFilter(): void
```

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfos resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsAccountMgmtInfos resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsAccountMgmtInfos to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsAccountMgmtInfos that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsAccountMgmtInfos to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfos">accountMgmtInfos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCountInput">accountMgmtInfoCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilterInput">accountMgmtInfoFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCount">accountMgmtInfoCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilter">accountMgmtInfoFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accountMgmtInfos`<sup>Required</sup> <a name="accountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfos"></a>

```typescript
public readonly accountMgmtInfos: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `accountMgmtInfoCountInput`<sup>Optional</sup> <a name="accountMgmtInfoCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCountInput"></a>

```typescript
public readonly accountMgmtInfoCountInput: number;
```

- *Type:* number

---

##### `accountMgmtInfoFilterInput`<sup>Optional</sup> <a name="accountMgmtInfoFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilterInput"></a>

```typescript
public readonly accountMgmtInfoFilterInput: string;
```

- *Type:* string

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `accountMgmtInfoCount`<sup>Required</sup> <a name="accountMgmtInfoCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoCount"></a>

```typescript
public readonly accountMgmtInfoCount: number;
```

- *Type:* number

---

##### `accountMgmtInfoFilter`<sup>Required</sup> <a name="accountMgmtInfoFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.accountMgmtInfoFilter"></a>

```typescript
public readonly accountMgmtInfoFilter: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfos.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact = { ... }
```


### DataOciIdentityDomainsAccountMgmtInfosConfig <a name="DataOciIdentityDomainsAccountMgmtInfosConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsAccountMgmtInfosConfig: dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoCount">accountMgmtInfoCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoFilter">accountMgmtInfoFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#idcs_endpoint DataOciIdentityDomainsAccountMgmtInfos#idcs_endpoint}.

---

##### `accountMgmtInfoCount`<sup>Optional</sup> <a name="accountMgmtInfoCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoCount"></a>

```typescript
public readonly accountMgmtInfoCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_count DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_count}.

---

##### `accountMgmtInfoFilter`<sup>Optional</sup> <a name="accountMgmtInfoFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.accountMgmtInfoFilter"></a>

```typescript
public readonly accountMgmtInfoFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#account_mgmt_info_filter DataOciIdentityDomainsAccountMgmtInfos#account_mgmt_info_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attributes DataOciIdentityDomainsAccountMgmtInfos#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#attribute_sets DataOciIdentityDomainsAccountMgmtInfos#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#authorization DataOciIdentityDomainsAccountMgmtInfos#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#compartment_id DataOciIdentityDomainsAccountMgmtInfos#compartment_id}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#resource_type_schema_version DataOciIdentityDomainsAccountMgmtInfos#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_by DataOciIdentityDomainsAccountMgmtInfos#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#sort_order DataOciIdentityDomainsAccountMgmtInfos#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_account_mgmt_infos#start_index DataOciIdentityDomainsAccountMgmtInfos#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appIcon">appIcon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appThumbnail">appThumbnail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAliasApp">isAliasApp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAuthoritative">isAuthoritative</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isLoginTarget">isLoginTarget</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isManagedApp">isManagedApp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOauthResource">isOauthResource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOpcService">isOpcService</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isUnmanagedApp">isUnmanagedApp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.loginMechanism">loginMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.meterAsOpcService">meterAsOpcService</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.serviceTypeUrn">serviceTypeUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.showInMyApps">showInMyApps</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appIcon`<sup>Required</sup> <a name="appIcon" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appIcon"></a>

```typescript
public readonly appIcon: string;
```

- *Type:* string

---

##### `appThumbnail`<sup>Required</sup> <a name="appThumbnail" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.appThumbnail"></a>

```typescript
public readonly appThumbnail: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `isAliasApp`<sup>Required</sup> <a name="isAliasApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAliasApp"></a>

```typescript
public readonly isAliasApp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isAuthoritative`<sup>Required</sup> <a name="isAuthoritative" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isAuthoritative"></a>

```typescript
public readonly isAuthoritative: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLoginTarget`<sup>Required</sup> <a name="isLoginTarget" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isLoginTarget"></a>

```typescript
public readonly isLoginTarget: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isManagedApp`<sup>Required</sup> <a name="isManagedApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isManagedApp"></a>

```typescript
public readonly isManagedApp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOauthResource`<sup>Required</sup> <a name="isOauthResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOauthResource"></a>

```typescript
public readonly isOauthResource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOpcService`<sup>Required</sup> <a name="isOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isOpcService"></a>

```typescript
public readonly isOpcService: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isUnmanagedApp`<sup>Required</sup> <a name="isUnmanagedApp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.isUnmanagedApp"></a>

```typescript
public readonly isUnmanagedApp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `loginMechanism`<sup>Required</sup> <a name="loginMechanism" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.loginMechanism"></a>

```typescript
public readonly loginMechanism: string;
```

- *Type:* string

---

##### `meterAsOpcService`<sup>Required</sup> <a name="meterAsOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.meterAsOpcService"></a>

```typescript
public readonly meterAsOpcService: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `serviceTypeUrn`<sup>Required</sup> <a name="serviceTypeUrn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.serviceTypeUrn"></a>

```typescript
public readonly serviceTypeUrn: string;
```

- *Type:* string

---

##### `showInMyApps`<sup>Required</sup> <a name="showInMyApps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.showInMyApps"></a>

```typescript
public readonly showInMyApps: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosApp</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwners</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMeta</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClass</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountMgmtInfoId">accountMgmtInfoId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountType">accountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.app">app</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compositeKey">compositeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotBackFillGrants">doNotBackFillGrants</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotPerformActionOnTarget">doNotPerformActionOnTarget</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.favorite">favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.isAccount">isAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.lastAccessed">lastAccessed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.matchingOwners">matchingOwners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.objectClass">objectClass</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.operationContext">operationContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.owner">owner</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.previewOnly">previewOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceType">resourceType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncResponse">syncResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncSituation">syncSituation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncTimestamp">syncTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.userWalletArtifact">userWalletArtifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountMgmtInfoId`<sup>Required</sup> <a name="accountMgmtInfoId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountMgmtInfoId"></a>

```typescript
public readonly accountMgmtInfoId: string;
```

- *Type:* string

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.accountType"></a>

```typescript
public readonly accountType: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `app`<sup>Required</sup> <a name="app" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.app"></a>

```typescript
public readonly app: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosAppList</a>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `compositeKey`<sup>Required</sup> <a name="compositeKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.compositeKey"></a>

```typescript
public readonly compositeKey: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `doNotBackFillGrants`<sup>Required</sup> <a name="doNotBackFillGrants" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotBackFillGrants"></a>

```typescript
public readonly doNotBackFillGrants: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `doNotPerformActionOnTarget`<sup>Required</sup> <a name="doNotPerformActionOnTarget" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.doNotPerformActionOnTarget"></a>

```typescript
public readonly doNotPerformActionOnTarget: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `favorite`<sup>Required</sup> <a name="favorite" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.favorite"></a>

```typescript
public readonly favorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `isAccount`<sup>Required</sup> <a name="isAccount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.isAccount"></a>

```typescript
public readonly isAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastAccessed`<sup>Required</sup> <a name="lastAccessed" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.lastAccessed"></a>

```typescript
public readonly lastAccessed: string;
```

- *Type:* string

---

##### `matchingOwners`<sup>Required</sup> <a name="matchingOwners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.matchingOwners"></a>

```typescript
public readonly matchingOwners: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMatchingOwnersList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectClass`<sup>Required</sup> <a name="objectClass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.objectClass"></a>

```typescript
public readonly objectClass: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosObjectClassList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `operationContext`<sup>Required</sup> <a name="operationContext" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.operationContext"></a>

```typescript
public readonly operationContext: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.owner"></a>

```typescript
public readonly owner: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList</a>

---

##### `previewOnly`<sup>Required</sup> <a name="previewOnly" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.previewOnly"></a>

```typescript
public readonly previewOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList</a>

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `syncResponse`<sup>Required</sup> <a name="syncResponse" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncResponse"></a>

```typescript
public readonly syncResponse: string;
```

- *Type:* string

---

##### `syncSituation`<sup>Required</sup> <a name="syncSituation" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncSituation"></a>

```typescript
public readonly syncSituation: string;
```

- *Type:* string

---

##### `syncTimestamp`<sup>Required</sup> <a name="syncTimestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.syncTimestamp"></a>

```typescript
public readonly syncTimestamp: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `userWalletArtifact`<sup>Required</sup> <a name="userWalletArtifact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.userWalletArtifact"></a>

```typescript
public readonly userWalletArtifact: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfos</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosOwner</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosResourceType</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosTags</a>

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference <a name="DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsAccountMgmtInfos } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsAccountMgmtInfos.DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact">DataOciIdentityDomainsAccountMgmtInfosAccountMgmtInfosUserWalletArtifact</a>

---



