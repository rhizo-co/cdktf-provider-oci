# `dataOciIdentityDomainsNetworkPerimeters` Submodule <a name="`dataOciIdentityDomainsNetworkPerimeters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsNetworkPerimeters <a name="DataOciIdentityDomainsNetworkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters oci_identity_domains_network_perimeters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters(scope: Construct, id: string, config: DataOciIdentityDomainsNetworkPerimetersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig">DataOciIdentityDomainsNetworkPerimetersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig">DataOciIdentityDomainsNetworkPerimetersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterCount">resetNetworkPerimeterCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterFilter">resetNetworkPerimeterFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkPerimeterCount` <a name="resetNetworkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterCount"></a>

```typescript
public resetNetworkPerimeterCount(): void
```

##### `resetNetworkPerimeterFilter` <a name="resetNetworkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetNetworkPerimeterFilter"></a>

```typescript
public resetNetworkPerimeterFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsNetworkPerimeters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsNetworkPerimeters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsNetworkPerimeters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsNetworkPerimeters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsNetworkPerimeters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeters">networkPerimeters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCountInput">networkPerimeterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilterInput">networkPerimeterFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCount">networkPerimeterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilter">networkPerimeterFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `networkPerimeters`<sup>Required</sup> <a name="networkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeters"></a>

```typescript
public readonly networkPerimeters: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkPerimeterCountInput`<sup>Optional</sup> <a name="networkPerimeterCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCountInput"></a>

```typescript
public readonly networkPerimeterCountInput: number;
```

- *Type:* number

---

##### `networkPerimeterFilterInput`<sup>Optional</sup> <a name="networkPerimeterFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilterInput"></a>

```typescript
public readonly networkPerimeterFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `networkPerimeterCount`<sup>Required</sup> <a name="networkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterCount"></a>

```typescript
public readonly networkPerimeterCount: number;
```

- *Type:* number

---

##### `networkPerimeterFilter`<sup>Required</sup> <a name="networkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.networkPerimeterFilter"></a>

```typescript
public readonly networkPerimeterFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimeters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsNetworkPerimetersConfig <a name="DataOciIdentityDomainsNetworkPerimetersConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersConfig: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterCount">networkPerimeterCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterFilter">networkPerimeterFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#idcs_endpoint DataOciIdentityDomainsNetworkPerimeters#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attributes DataOciIdentityDomainsNetworkPerimeters#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#attribute_sets DataOciIdentityDomainsNetworkPerimeters#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#authorization DataOciIdentityDomainsNetworkPerimeters#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#compartment_id DataOciIdentityDomainsNetworkPerimeters#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#id DataOciIdentityDomainsNetworkPerimeters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPerimeterCount`<sup>Optional</sup> <a name="networkPerimeterCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterCount"></a>

```typescript
public readonly networkPerimeterCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_count DataOciIdentityDomainsNetworkPerimeters#network_perimeter_count}.

---

##### `networkPerimeterFilter`<sup>Optional</sup> <a name="networkPerimeterFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.networkPerimeterFilter"></a>

```typescript
public readonly networkPerimeterFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#network_perimeter_filter DataOciIdentityDomainsNetworkPerimeters#network_perimeter_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#resource_type_schema_version DataOciIdentityDomainsNetworkPerimeters#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_by DataOciIdentityDomainsNetworkPerimeters#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#sort_order DataOciIdentityDomainsNetworkPerimeters#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_network_perimeters#start_index DataOciIdentityDomainsNetworkPerimeters#start_index}.

---

### DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersNetworkPerimeters: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters = { ... }
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses = { ... }
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta = { ... }
```


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags: dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedBy</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddresses</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMeta</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ipAddresses">ipAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters">DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsCreatedByList</a>

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersIpAddressesList</a>

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersMetaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters">DataOciIdentityDomainsNetworkPerimetersNetworkPerimeters</a>

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference <a name="DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsNetworkPerimeters } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsNetworkPerimeters.DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags">DataOciIdentityDomainsNetworkPerimetersNetworkPerimetersTags</a>

---



