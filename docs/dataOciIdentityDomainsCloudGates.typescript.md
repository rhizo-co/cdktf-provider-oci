# `dataOciIdentityDomainsCloudGates` Submodule <a name="`dataOciIdentityDomainsCloudGates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsCloudGates <a name="DataOciIdentityDomainsCloudGates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates oci_identity_domains_cloud_gates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates(scope: Construct, id: string, config: DataOciIdentityDomainsCloudGatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig">DataOciIdentityDomainsCloudGatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig">DataOciIdentityDomainsCloudGatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateCount">resetCloudGateCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateFilter">resetCloudGateFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCloudGateCount` <a name="resetCloudGateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateCount"></a>

```typescript
public resetCloudGateCount(): void
```

##### `resetCloudGateFilter` <a name="resetCloudGateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCloudGateFilter"></a>

```typescript
public resetCloudGateFilter(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsCloudGates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsCloudGates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsCloudGates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsCloudGates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsCloudGates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGates">cloudGates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList">DataOciIdentityDomainsCloudGatesCloudGatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCountInput">cloudGateCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilterInput">cloudGateFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCount">cloudGateCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilter">cloudGateFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudGates`<sup>Required</sup> <a name="cloudGates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGates"></a>

```typescript
public readonly cloudGates: DataOciIdentityDomainsCloudGatesCloudGatesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList">DataOciIdentityDomainsCloudGatesCloudGatesList</a>

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `cloudGateCountInput`<sup>Optional</sup> <a name="cloudGateCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCountInput"></a>

```typescript
public readonly cloudGateCountInput: number;
```

- *Type:* number

---

##### `cloudGateFilterInput`<sup>Optional</sup> <a name="cloudGateFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilterInput"></a>

```typescript
public readonly cloudGateFilterInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `cloudGateCount`<sup>Required</sup> <a name="cloudGateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateCount"></a>

```typescript
public readonly cloudGateCount: number;
```

- *Type:* number

---

##### `cloudGateFilter`<sup>Required</sup> <a name="cloudGateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.cloudGateFilter"></a>

```typescript
public readonly cloudGateFilter: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsCloudGatesCloudGates <a name="DataOciIdentityDomainsCloudGatesCloudGates" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGates: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesMappings <a name="DataOciIdentityDomainsCloudGatesCloudGatesMappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesMappings: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesMeta <a name="DataOciIdentityDomainsCloudGatesCloudGatesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesMeta: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesOauthClient <a name="DataOciIdentityDomainsCloudGatesCloudGatesOauthClient" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesOauthClient: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesServers <a name="DataOciIdentityDomainsCloudGatesCloudGatesServers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesServers: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesTags <a name="DataOciIdentityDomainsCloudGatesCloudGatesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesTags: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups = { ... }
```


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers = { ... }
```


### DataOciIdentityDomainsCloudGatesConfig <a name="DataOciIdentityDomainsCloudGatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsCloudGatesConfig: dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#idcs_endpoint DataOciIdentityDomainsCloudGates#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attributes DataOciIdentityDomainsCloudGates#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attribute_sets DataOciIdentityDomainsCloudGates#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#authorization DataOciIdentityDomainsCloudGates#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateCount">cloudGateCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_count DataOciIdentityDomainsCloudGates#cloud_gate_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateFilter">cloudGateFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_filter DataOciIdentityDomainsCloudGates#cloud_gate_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#compartment_id DataOciIdentityDomainsCloudGates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#id DataOciIdentityDomainsCloudGates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#resource_type_schema_version DataOciIdentityDomainsCloudGates#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_by DataOciIdentityDomainsCloudGates#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_order DataOciIdentityDomainsCloudGates#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#start_index DataOciIdentityDomainsCloudGates#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#idcs_endpoint DataOciIdentityDomainsCloudGates#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attributes DataOciIdentityDomainsCloudGates#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#attribute_sets DataOciIdentityDomainsCloudGates#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#authorization DataOciIdentityDomainsCloudGates#authorization}.

---

##### `cloudGateCount`<sup>Optional</sup> <a name="cloudGateCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateCount"></a>

```typescript
public readonly cloudGateCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_count DataOciIdentityDomainsCloudGates#cloud_gate_count}.

---

##### `cloudGateFilter`<sup>Optional</sup> <a name="cloudGateFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.cloudGateFilter"></a>

```typescript
public readonly cloudGateFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#cloud_gate_filter DataOciIdentityDomainsCloudGates#cloud_gate_filter}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#compartment_id DataOciIdentityDomainsCloudGates#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#id DataOciIdentityDomainsCloudGates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#resource_type_schema_version DataOciIdentityDomainsCloudGates#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_by DataOciIdentityDomainsCloudGates#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#sort_order DataOciIdentityDomainsCloudGates#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_cloud_gates#start_index DataOciIdentityDomainsCloudGates#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesList <a name="DataOciIdentityDomainsCloudGatesCloudGatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesMappingsList <a name="DataOciIdentityDomainsCloudGatesCloudGatesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.mappingId">mappingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.nginxSettings">nginxSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.proxyPass">proxyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.resourcePrefix">resourcePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.upstreamServerGroupId">upstreamServerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings">DataOciIdentityDomainsCloudGatesCloudGatesMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `mappingId`<sup>Required</sup> <a name="mappingId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.mappingId"></a>

```typescript
public readonly mappingId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nginxSettings`<sup>Required</sup> <a name="nginxSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.nginxSettings"></a>

```typescript
public readonly nginxSettings: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `proxyPass`<sup>Required</sup> <a name="proxyPass" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.proxyPass"></a>

```typescript
public readonly proxyPass: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `resourcePrefix`<sup>Required</sup> <a name="resourcePrefix" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.resourcePrefix"></a>

```typescript
public readonly resourcePrefix: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `upstreamServerGroupId`<sup>Required</sup> <a name="upstreamServerGroupId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.upstreamServerGroupId"></a>

```typescript
public readonly upstreamServerGroupId: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesMappings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappings">DataOciIdentityDomainsCloudGatesCloudGatesMappings</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesMetaList <a name="DataOciIdentityDomainsCloudGatesCloudGatesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta">DataOciIdentityDomainsCloudGatesCloudGatesMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMeta">DataOciIdentityDomainsCloudGatesCloudGatesMeta</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList <a name="DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient">DataOciIdentityDomainsCloudGatesCloudGatesOauthClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesOauthClient;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClient">DataOciIdentityDomainsCloudGatesCloudGatesOauthClient</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.isOpcService">isOpcService</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.mappings">mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList">DataOciIdentityDomainsCloudGatesCloudGatesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList">DataOciIdentityDomainsCloudGatesCloudGatesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.oauthClient">oauthClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList">DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.servers">servers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList">DataOciIdentityDomainsCloudGatesCloudGatesServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList">DataOciIdentityDomainsCloudGatesCloudGatesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServerGroups">upstreamServerGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServers">upstreamServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates">DataOciIdentityDomainsCloudGatesCloudGates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList">DataOciIdentityDomainsCloudGatesCloudGatesIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `isOpcService`<sup>Required</sup> <a name="isOpcService" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.isOpcService"></a>

```typescript
public readonly isOpcService: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.mappings"></a>

```typescript
public readonly mappings: DataOciIdentityDomainsCloudGatesCloudGatesMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMappingsList">DataOciIdentityDomainsCloudGatesCloudGatesMappingsList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsCloudGatesCloudGatesMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesMetaList">DataOciIdentityDomainsCloudGatesCloudGatesMetaList</a>

---

##### `oauthClient`<sup>Required</sup> <a name="oauthClient" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.oauthClient"></a>

```typescript
public readonly oauthClient: DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList">DataOciIdentityDomainsCloudGatesCloudGatesOauthClientList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.servers"></a>

```typescript
public readonly servers: DataOciIdentityDomainsCloudGatesCloudGatesServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList">DataOciIdentityDomainsCloudGatesCloudGatesServersList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsCloudGatesCloudGatesTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList">DataOciIdentityDomainsCloudGatesCloudGatesTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `upstreamServerGroups`<sup>Required</sup> <a name="upstreamServerGroups" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServerGroups"></a>

```typescript
public readonly upstreamServerGroups: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList</a>

---

##### `upstreamServers`<sup>Required</sup> <a name="upstreamServers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.upstreamServers"></a>

```typescript
public readonly upstreamServers: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGates">DataOciIdentityDomainsCloudGatesCloudGates</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesServersList <a name="DataOciIdentityDomainsCloudGatesCloudGatesServersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.nginxSettings">nginxSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.ssl">ssl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers">DataOciIdentityDomainsCloudGatesCloudGatesServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `nginxSettings`<sup>Required</sup> <a name="nginxSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.nginxSettings"></a>

```typescript
public readonly nginxSettings: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.ssl"></a>

```typescript
public readonly ssl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesServers">DataOciIdentityDomainsCloudGatesCloudGatesServers</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesTagsList <a name="DataOciIdentityDomainsCloudGatesCloudGatesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags">DataOciIdentityDomainsCloudGatesCloudGatesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesTags">DataOciIdentityDomainsCloudGatesCloudGatesTags</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.nginxSettings">nginxSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ssl">ssl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `nginxSettings`<sup>Required</sup> <a name="nginxSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.nginxSettings"></a>

```typescript
public readonly nginxSettings: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.ssl"></a>

```typescript
public readonly ssl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServerGroups</a>

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference <a name="DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsCloudGates } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.nginxSettings">nginxSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `nginxSettings`<sup>Required</sup> <a name="nginxSettings" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.nginxSettings"></a>

```typescript
public readonly nginxSettings: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsCloudGates.DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers">DataOciIdentityDomainsCloudGatesCloudGatesUpstreamServers</a>

---



