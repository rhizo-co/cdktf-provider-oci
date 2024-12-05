# `dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule <a name="`dataOciIdentityDomainsResourceTypeSchemaAttributes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes oci_identity_domains_resource_type_schema_attributes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes(scope: Construct, id: string, config: DataOciIdentityDomainsResourceTypeSchemaAttributesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig">DataOciIdentityDomainsResourceTypeSchemaAttributesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig">DataOciIdentityDomainsResourceTypeSchemaAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets">resetAttributeSets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount">resetResourceTypeSchemaAttributeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter">resetResourceTypeSchemaAttributeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion">resetResourceTypeSchemaVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy">resetSortBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder">resetSortOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex">resetStartIndex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetAttributeSets` <a name="resetAttributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAttributeSets"></a>

```typescript
public resetAttributeSets(): void
```

##### `resetAuthorization` <a name="resetAuthorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResourceTypeSchemaAttributeCount` <a name="resetResourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeCount"></a>

```typescript
public resetResourceTypeSchemaAttributeCount(): void
```

##### `resetResourceTypeSchemaAttributeFilter` <a name="resetResourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaAttributeFilter"></a>

```typescript
public resetResourceTypeSchemaAttributeFilter(): void
```

##### `resetResourceTypeSchemaVersion` <a name="resetResourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetResourceTypeSchemaVersion"></a>

```typescript
public resetResourceTypeSchemaVersion(): void
```

##### `resetSortBy` <a name="resetSortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortBy"></a>

```typescript
public resetSortBy(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```

##### `resetStartIndex` <a name="resetStartIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.resetStartIndex"></a>

```typescript
public resetStartIndex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityDomainsResourceTypeSchemaAttributes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityDomainsResourceTypeSchemaAttributes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityDomainsResourceTypeSchemaAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsResourceTypeSchemaAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage">itemsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes">resourceTypeSchemaAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults">totalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput">attributeSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput">attributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput">authorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput">idcsEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput">resourceTypeSchemaAttributeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput">resourceTypeSchemaAttributeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput">resourceTypeSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput">sortByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput">sortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput">startIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization">authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount">resourceTypeSchemaAttributeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter">resourceTypeSchemaAttributeFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy">sortBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder">sortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex">startIndex</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `itemsPerPage`<sup>Required</sup> <a name="itemsPerPage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.itemsPerPage"></a>

```typescript
public readonly itemsPerPage: number;
```

- *Type:* number

---

##### `resourceTypeSchemaAttributes`<sup>Required</sup> <a name="resourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributes"></a>

```typescript
public readonly resourceTypeSchemaAttributes: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `totalResults`<sup>Required</sup> <a name="totalResults" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.totalResults"></a>

```typescript
public readonly totalResults: number;
```

- *Type:* number

---

##### `attributeSetsInput`<sup>Optional</sup> <a name="attributeSetsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSetsInput"></a>

```typescript
public readonly attributeSetsInput: string[];
```

- *Type:* string[]

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributesInput"></a>

```typescript
public readonly attributesInput: string;
```

- *Type:* string

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idcsEndpointInput`<sup>Optional</sup> <a name="idcsEndpointInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpointInput"></a>

```typescript
public readonly idcsEndpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaAttributeCountInput`<sup>Optional</sup> <a name="resourceTypeSchemaAttributeCountInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCountInput"></a>

```typescript
public readonly resourceTypeSchemaAttributeCountInput: number;
```

- *Type:* number

---

##### `resourceTypeSchemaAttributeFilterInput`<sup>Optional</sup> <a name="resourceTypeSchemaAttributeFilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilterInput"></a>

```typescript
public readonly resourceTypeSchemaAttributeFilterInput: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersionInput`<sup>Optional</sup> <a name="resourceTypeSchemaVersionInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersionInput"></a>

```typescript
public readonly resourceTypeSchemaVersionInput: string;
```

- *Type:* string

---

##### `sortByInput`<sup>Optional</sup> <a name="sortByInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortByInput"></a>

```typescript
public readonly sortByInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: string;
```

- *Type:* string

---

##### `startIndexInput`<sup>Optional</sup> <a name="startIndexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndexInput"></a>

```typescript
public readonly startIndexInput: number;
```

- *Type:* number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `attributeSets`<sup>Required</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

---

##### `resourceTypeSchemaAttributeCount`<sup>Required</sup> <a name="resourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeCount"></a>

```typescript
public readonly resourceTypeSchemaAttributeCount: number;
```

- *Type:* number

---

##### `resourceTypeSchemaAttributeFilter`<sup>Required</sup> <a name="resourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaAttributeFilter"></a>

```typescript
public readonly resourceTypeSchemaAttributeFilter: string;
```

- *Type:* string

---

##### `resourceTypeSchemaVersion`<sup>Required</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

---

##### `sortBy`<sup>Required</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

---

##### `startIndex`<sup>Required</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesConfig <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsResourceTypeSchemaAttributesConfig: dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint">idcsEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes">attributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets">attributeSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization">authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount">resourceTypeSchemaAttributeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter">resourceTypeSchemaAttributeFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion">resourceTypeSchemaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy">sortBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder">sortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex">startIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idcsEndpoint`<sup>Required</sup> <a name="idcsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.idcsEndpoint"></a>

```typescript
public readonly idcsEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#idcs_endpoint DataOciIdentityDomainsResourceTypeSchemaAttributes#idcs_endpoint}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attributes DataOciIdentityDomainsResourceTypeSchemaAttributes#attributes}.

---

##### `attributeSets`<sup>Optional</sup> <a name="attributeSets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.attributeSets"></a>

```typescript
public readonly attributeSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#attribute_sets DataOciIdentityDomainsResourceTypeSchemaAttributes#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.authorization"></a>

```typescript
public readonly authorization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#authorization DataOciIdentityDomainsResourceTypeSchemaAttributes#authorization}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#compartment_id DataOciIdentityDomainsResourceTypeSchemaAttributes#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#id DataOciIdentityDomainsResourceTypeSchemaAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceTypeSchemaAttributeCount`<sup>Optional</sup> <a name="resourceTypeSchemaAttributeCount" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeCount"></a>

```typescript
public readonly resourceTypeSchemaAttributeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_count DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_count}.

---

##### `resourceTypeSchemaAttributeFilter`<sup>Optional</sup> <a name="resourceTypeSchemaAttributeFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaAttributeFilter"></a>

```typescript
public readonly resourceTypeSchemaAttributeFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_attribute_filter DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_attribute_filter}.

---

##### `resourceTypeSchemaVersion`<sup>Optional</sup> <a name="resourceTypeSchemaVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.resourceTypeSchemaVersion"></a>

```typescript
public readonly resourceTypeSchemaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#resource_type_schema_version DataOciIdentityDomainsResourceTypeSchemaAttributes#resource_type_schema_version}.

---

##### `sortBy`<sup>Optional</sup> <a name="sortBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortBy"></a>

```typescript
public readonly sortBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_by DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_by}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.sortOrder"></a>

```typescript
public readonly sortOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#sort_order DataOciIdentityDomainsResourceTypeSchemaAttributes#sort_order}.

---

##### `startIndex`<sup>Optional</sup> <a name="startIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesConfig.property.startIndex"></a>

```typescript
public readonly startIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_resource_type_schema_attributes#start_index DataOciIdentityDomainsResourceTypeSchemaAttributes#start_index}.

---

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes: dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes = { ... }
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy: dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy = { ... }
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy: dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy = { ... }
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta: dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta = { ... }
```


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags: dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMeta</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues">canonicalValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact">caseExact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid">compartmentOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress">deleteInProgress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid">domainOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability">endUserMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues">endUserMutabilityAllowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber">idcsAddedSinceReleaseNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion">idcsAddedSinceVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable">idcsAttributeCacheable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable">idcsAttributeMappable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable">idcsAuditable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName">idcsAutoIncrementSeqName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter">idcsCanonicalValueSourceFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType">idcsCanonicalValueSourceResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey">idcsCompositeKey</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy">idcsCreatedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName">idcsCsvColumnHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute">idcsCustomAttribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber">idcsDeprecatedSinceReleaseNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion">idcsDeprecatedSinceVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName">idcsDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId">idcsDisplayNameMessageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues">idcsFetchComplexAttributeValues</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper">idcsFromTargetMapper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName">idcsFullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated">idcsGenerated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType">idcsIcfAttributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName">idcsIcfBundleAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired">idcsIcfRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes">idcsIndirectRefResourceAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal">idcsInternal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy">idcsLastModifiedBy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease">idcsLastUpgradedInRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength">idcsMaxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue">idcsMaxValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength">idcsMinLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue">idcsMinValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage">idcsMultiLanguage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations">idcsPreventedOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute">idcsRefResourceAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes">idcsRefResourceAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn">idcsSchemaUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant">idcsScimCompliant</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable">idcsSearchable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive">idcsSensitive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName">idcsTargetAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom">idcsTargetAttributeNameToMigrateFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName">idcsTargetNormAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName">idcsTargetUniqueConstraintName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper">idcsToTargetMapper</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue">idcsTrimStringValue</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference">idcsValidateReference</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted">idcsValuePersisted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued">multiValued</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability">mutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes">referenceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required">required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned">returned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas">schemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid">tenancyOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness">uniqueness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canonicalValues`<sup>Required</sup> <a name="canonicalValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.canonicalValues"></a>

```typescript
public readonly canonicalValues: string[];
```

- *Type:* string[]

---

##### `caseExact`<sup>Required</sup> <a name="caseExact" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.caseExact"></a>

```typescript
public readonly caseExact: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.compartmentOcid"></a>

```typescript
public readonly compartmentOcid: string;
```

- *Type:* string

---

##### `deleteInProgress`<sup>Required</sup> <a name="deleteInProgress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.deleteInProgress"></a>

```typescript
public readonly deleteInProgress: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainOcid`<sup>Required</sup> <a name="domainOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.domainOcid"></a>

```typescript
public readonly domainOcid: string;
```

- *Type:* string

---

##### `endUserMutability`<sup>Required</sup> <a name="endUserMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutability"></a>

```typescript
public readonly endUserMutability: string;
```

- *Type:* string

---

##### `endUserMutabilityAllowedValues`<sup>Required</sup> <a name="endUserMutabilityAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.endUserMutabilityAllowedValues"></a>

```typescript
public readonly endUserMutabilityAllowedValues: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsAddedSinceReleaseNumber`<sup>Required</sup> <a name="idcsAddedSinceReleaseNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceReleaseNumber"></a>

```typescript
public readonly idcsAddedSinceReleaseNumber: string;
```

- *Type:* string

---

##### `idcsAddedSinceVersion`<sup>Required</sup> <a name="idcsAddedSinceVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAddedSinceVersion"></a>

```typescript
public readonly idcsAddedSinceVersion: number;
```

- *Type:* number

---

##### `idcsAttributeCacheable`<sup>Required</sup> <a name="idcsAttributeCacheable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeCacheable"></a>

```typescript
public readonly idcsAttributeCacheable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsAttributeMappable`<sup>Required</sup> <a name="idcsAttributeMappable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAttributeMappable"></a>

```typescript
public readonly idcsAttributeMappable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsAuditable`<sup>Required</sup> <a name="idcsAuditable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAuditable"></a>

```typescript
public readonly idcsAuditable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsAutoIncrementSeqName`<sup>Required</sup> <a name="idcsAutoIncrementSeqName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsAutoIncrementSeqName"></a>

```typescript
public readonly idcsAutoIncrementSeqName: string;
```

- *Type:* string

---

##### `idcsCanonicalValueSourceFilter`<sup>Required</sup> <a name="idcsCanonicalValueSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceFilter"></a>

```typescript
public readonly idcsCanonicalValueSourceFilter: string;
```

- *Type:* string

---

##### `idcsCanonicalValueSourceResourceType`<sup>Required</sup> <a name="idcsCanonicalValueSourceResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCanonicalValueSourceResourceType"></a>

```typescript
public readonly idcsCanonicalValueSourceResourceType: string;
```

- *Type:* string

---

##### `idcsCompositeKey`<sup>Required</sup> <a name="idcsCompositeKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCompositeKey"></a>

```typescript
public readonly idcsCompositeKey: string[];
```

- *Type:* string[]

---

##### `idcsCreatedBy`<sup>Required</sup> <a name="idcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCreatedBy"></a>

```typescript
public readonly idcsCreatedBy: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsCreatedByList</a>

---

##### `idcsCsvColumnHeaderName`<sup>Required</sup> <a name="idcsCsvColumnHeaderName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCsvColumnHeaderName"></a>

```typescript
public readonly idcsCsvColumnHeaderName: string;
```

- *Type:* string

---

##### `idcsCustomAttribute`<sup>Required</sup> <a name="idcsCustomAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsCustomAttribute"></a>

```typescript
public readonly idcsCustomAttribute: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsDeprecatedSinceReleaseNumber`<sup>Required</sup> <a name="idcsDeprecatedSinceReleaseNumber" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceReleaseNumber"></a>

```typescript
public readonly idcsDeprecatedSinceReleaseNumber: string;
```

- *Type:* string

---

##### `idcsDeprecatedSinceVersion`<sup>Required</sup> <a name="idcsDeprecatedSinceVersion" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDeprecatedSinceVersion"></a>

```typescript
public readonly idcsDeprecatedSinceVersion: number;
```

- *Type:* number

---

##### `idcsDisplayName`<sup>Required</sup> <a name="idcsDisplayName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayName"></a>

```typescript
public readonly idcsDisplayName: string;
```

- *Type:* string

---

##### `idcsDisplayNameMessageId`<sup>Required</sup> <a name="idcsDisplayNameMessageId" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsDisplayNameMessageId"></a>

```typescript
public readonly idcsDisplayNameMessageId: string;
```

- *Type:* string

---

##### `idcsFetchComplexAttributeValues`<sup>Required</sup> <a name="idcsFetchComplexAttributeValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFetchComplexAttributeValues"></a>

```typescript
public readonly idcsFetchComplexAttributeValues: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsFromTargetMapper`<sup>Required</sup> <a name="idcsFromTargetMapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFromTargetMapper"></a>

```typescript
public readonly idcsFromTargetMapper: string;
```

- *Type:* string

---

##### `idcsFullyQualifiedName`<sup>Required</sup> <a name="idcsFullyQualifiedName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsFullyQualifiedName"></a>

```typescript
public readonly idcsFullyQualifiedName: string;
```

- *Type:* string

---

##### `idcsGenerated`<sup>Required</sup> <a name="idcsGenerated" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsGenerated"></a>

```typescript
public readonly idcsGenerated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsIcfAttributeType`<sup>Required</sup> <a name="idcsIcfAttributeType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfAttributeType"></a>

```typescript
public readonly idcsIcfAttributeType: string;
```

- *Type:* string

---

##### `idcsIcfBundleAttributeName`<sup>Required</sup> <a name="idcsIcfBundleAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfBundleAttributeName"></a>

```typescript
public readonly idcsIcfBundleAttributeName: string;
```

- *Type:* string

---

##### `idcsIcfRequired`<sup>Required</sup> <a name="idcsIcfRequired" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIcfRequired"></a>

```typescript
public readonly idcsIcfRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsIndirectRefResourceAttributes`<sup>Required</sup> <a name="idcsIndirectRefResourceAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsIndirectRefResourceAttributes"></a>

```typescript
public readonly idcsIndirectRefResourceAttributes: string[];
```

- *Type:* string[]

---

##### `idcsInternal`<sup>Required</sup> <a name="idcsInternal" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsInternal"></a>

```typescript
public readonly idcsInternal: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsLastModifiedBy`<sup>Required</sup> <a name="idcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastModifiedBy"></a>

```typescript
public readonly idcsLastModifiedBy: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesIdcsLastModifiedByList</a>

---

##### `idcsLastUpgradedInRelease`<sup>Required</sup> <a name="idcsLastUpgradedInRelease" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsLastUpgradedInRelease"></a>

```typescript
public readonly idcsLastUpgradedInRelease: string;
```

- *Type:* string

---

##### `idcsMaxLength`<sup>Required</sup> <a name="idcsMaxLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxLength"></a>

```typescript
public readonly idcsMaxLength: number;
```

- *Type:* number

---

##### `idcsMaxValue`<sup>Required</sup> <a name="idcsMaxValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMaxValue"></a>

```typescript
public readonly idcsMaxValue: number;
```

- *Type:* number

---

##### `idcsMinLength`<sup>Required</sup> <a name="idcsMinLength" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinLength"></a>

```typescript
public readonly idcsMinLength: number;
```

- *Type:* number

---

##### `idcsMinValue`<sup>Required</sup> <a name="idcsMinValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMinValue"></a>

```typescript
public readonly idcsMinValue: number;
```

- *Type:* number

---

##### `idcsMultiLanguage`<sup>Required</sup> <a name="idcsMultiLanguage" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsMultiLanguage"></a>

```typescript
public readonly idcsMultiLanguage: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsPreventedOperations`<sup>Required</sup> <a name="idcsPreventedOperations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsPreventedOperations"></a>

```typescript
public readonly idcsPreventedOperations: string[];
```

- *Type:* string[]

---

##### `idcsRefResourceAttribute`<sup>Required</sup> <a name="idcsRefResourceAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttribute"></a>

```typescript
public readonly idcsRefResourceAttribute: string;
```

- *Type:* string

---

##### `idcsRefResourceAttributes`<sup>Required</sup> <a name="idcsRefResourceAttributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsRefResourceAttributes"></a>

```typescript
public readonly idcsRefResourceAttributes: string[];
```

- *Type:* string[]

---

##### `idcsSchemaUrn`<sup>Required</sup> <a name="idcsSchemaUrn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSchemaUrn"></a>

```typescript
public readonly idcsSchemaUrn: string;
```

- *Type:* string

---

##### `idcsScimCompliant`<sup>Required</sup> <a name="idcsScimCompliant" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsScimCompliant"></a>

```typescript
public readonly idcsScimCompliant: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsSearchable`<sup>Required</sup> <a name="idcsSearchable" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSearchable"></a>

```typescript
public readonly idcsSearchable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsSensitive`<sup>Required</sup> <a name="idcsSensitive" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsSensitive"></a>

```typescript
public readonly idcsSensitive: string;
```

- *Type:* string

---

##### `idcsTargetAttributeName`<sup>Required</sup> <a name="idcsTargetAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeName"></a>

```typescript
public readonly idcsTargetAttributeName: string;
```

- *Type:* string

---

##### `idcsTargetAttributeNameToMigrateFrom`<sup>Required</sup> <a name="idcsTargetAttributeNameToMigrateFrom" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetAttributeNameToMigrateFrom"></a>

```typescript
public readonly idcsTargetAttributeNameToMigrateFrom: string;
```

- *Type:* string

---

##### `idcsTargetNormAttributeName`<sup>Required</sup> <a name="idcsTargetNormAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetNormAttributeName"></a>

```typescript
public readonly idcsTargetNormAttributeName: string;
```

- *Type:* string

---

##### `idcsTargetUniqueConstraintName`<sup>Required</sup> <a name="idcsTargetUniqueConstraintName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTargetUniqueConstraintName"></a>

```typescript
public readonly idcsTargetUniqueConstraintName: string;
```

- *Type:* string

---

##### `idcsToTargetMapper`<sup>Required</sup> <a name="idcsToTargetMapper" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsToTargetMapper"></a>

```typescript
public readonly idcsToTargetMapper: string;
```

- *Type:* string

---

##### `idcsTrimStringValue`<sup>Required</sup> <a name="idcsTrimStringValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsTrimStringValue"></a>

```typescript
public readonly idcsTrimStringValue: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsValidateReference`<sup>Required</sup> <a name="idcsValidateReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValidateReference"></a>

```typescript
public readonly idcsValidateReference: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idcsValuePersisted`<sup>Required</sup> <a name="idcsValuePersisted" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.idcsValuePersisted"></a>

```typescript
public readonly idcsValuePersisted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.meta"></a>

```typescript
public readonly meta: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesMetaList</a>

---

##### `multiValued`<sup>Required</sup> <a name="multiValued" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.multiValued"></a>

```typescript
public readonly multiValued: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `mutability`<sup>Required</sup> <a name="mutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.mutability"></a>

```typescript
public readonly mutability: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `referenceTypes`<sup>Required</sup> <a name="referenceTypes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.referenceTypes"></a>

```typescript
public readonly referenceTypes: string[];
```

- *Type:* string[]

---

##### `required`<sup>Required</sup> <a name="required" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `returned`<sup>Required</sup> <a name="returned" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.returned"></a>

```typescript
public readonly returned: string;
```

- *Type:* string

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.schemas"></a>

```typescript
public readonly schemas: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList</a>

---

##### `tenancyOcid`<sup>Required</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.tenancyOcid"></a>

```typescript
public readonly tenancyOcid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uniqueness`<sup>Required</sup> <a name="uniqueness" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.uniqueness"></a>

```typescript
public readonly uniqueness: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributes</a>

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get"></a>

```typescript
public get(index: number): DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference <a name="DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityDomainsResourceTypeSchemaAttributes } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsResourceTypeSchemaAttributes.DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags">DataOciIdentityDomainsResourceTypeSchemaAttributesResourceTypeSchemaAttributesTags</a>

---



